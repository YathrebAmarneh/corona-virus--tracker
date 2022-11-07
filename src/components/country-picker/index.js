import style from "./style.module.css";
import axios from "axios";
import { useState, useEffect } from "react";

const CountryPicker = () => {
  const [data, setData] = useState([]);

  const [isFetch, setIsFetch] = useState(true);

  const getData = async () => {
    setIsFetch(true);

    const response = await axios.get(
      "https://covid19.mathdro.id/api/countries"
    );
    console.log(response);
    setData(response.data);
    setIsFetch(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (isFetch) {
    return "Data is Loading ...";
  }

  console.log("countries names", data.countries);
  return (
    <div className={style.container}>
      <select name="cars" id="cars">
        <option value="global">Global</option>

        {data.countries.map((item) => {
          return <option>{item.name}</option>;
        })}
      </select>
    </div>
  );
};

export default CountryPicker;
