<<<<<<< HEAD
import "./App.css";
import CountryPicker from "./components/country-picker";
import Introduction from "./components/Introduction";
=======
>>>>>>> d8b32011340c50502323dd84209fdfbd0f47a812
import {fetchData} from './API';
import Chart from './components/charts/barChart';
import {useEffect, useState} from 'react';
import styles from './App.module.css';
import Cards from './components/Cards';
<<<<<<< HEAD
=======
import CountryPicker from './components/country-picker';
import Introduction from './components/Introduction';
>>>>>>> d8b32011340c50502323dd84209fdfbd0f47a812

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
<<<<<<< HEAD
    <div className="App">
=======
    <div className={styles.container}>
>>>>>>> d8b32011340c50502323dd84209fdfbd0f47a812
      <Introduction />
      <Cards />
      <CountryPicker />
<<<<<<< HEAD
    {/* <div className={styles.container}> */}
      <Cards />
=======
>>>>>>> d8b32011340c50502323dd84209fdfbd0f47a812
      <Chart data={data} country={''} />
    </div>
  );
}

export default App;
