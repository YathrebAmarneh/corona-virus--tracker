import './App.css';
import Introduction from './components/Introduction';
import {fetchData} from './API';
import Chart from './components/charts/barChart';
import {useEffect, useState} from 'react';
import styles from './App.module.css';
import Cards from './components/Cards';
import Card from './components/Cards/Card';
import CountryPicker from './components/country-picker';

function App() {
  const [countryName, setCountryName] = useState('');

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

  const {data, country} = dataFetched;

  const handleOnChange = (country) => {
    setCountryName(country);
    // console.log(country);
    console.log('country from picker', countryName);
  };

  return (
    <div className="App">
      <Introduction />
      {/* <Cards countryName={countryName} /> */}
      {/* <CountryPicker handleOnChange={handleOnChange} /> */}
      <Chart data={data} country={'iraq'} />
    </div>
  );
}

export default App;
