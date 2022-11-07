import {fetchData} from './API';
import Chart from './components/charts/barChart';
import {useEffect, useState} from 'react';
import styles from './App.module.css';
import Cards from './components/Cards';
import CountryPicker from './components/country-picker';
import Introduction from './components/Introduction';

function App() {
  const [dataFetched, setDataFetched] = useState({
    data: {},
    country: 'israel',
  });

  useEffect(() => {
    const fetchDataUse = async () => {
      const data = await fetchData();

      setDataFetched({data});
    };
    fetchDataUse();
  }, []);
  // console.log(data);

  const {data, country} = dataFetched;
  return (
    <div className={styles.container}>
      <Introduction />
      <Cards />
      <CountryPicker />
      <Chart data={data} country={''} />
    </div>
  );
}

export default App;
