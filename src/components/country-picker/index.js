import style from './style.module.css';
import axios from 'axios';
import {useState, useEffect} from 'react';

const CountryPicker = ({handleOnChange}) => {
  const [data, setData] = useState([]);

  const [isFetch, setIsFetch] = useState(true);

  const getData = async () => {
    setIsFetch(true);

    const response = await axios.get(
      'https://covid19.mathdro.id/api/confirmed'
    );
    // console.log(response);
    setData(response.data);
    setIsFetch(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (isFetch) {
    return 'Data is Loading ...';
  }

  // console.log("countries names", data[0]);
  return (
    <div className={style.container}>
      <select
        name="cars"
        id="cars"
        onChange={(e) => handleOnChange(e.target.value)}
      >
        <option value="">Global</option>

        {data.map((item,index) => {
          return (
            <option value={`${item.countryRegion}`} key={index}>
              {item.countryRegion}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CountryPicker;
