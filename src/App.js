import {fetchData} from './API';
import Chart from './components/charts/barChart';
import {useEffect, useState} from 'react';
import styles from './App.module.css';
import Cards from './components/Cards';

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
      <Cards />
      <Chart data={data} country={''} />
    </div>
  );
}

export default App;
