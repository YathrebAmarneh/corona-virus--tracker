import {fetchData} from './API';
import Chart from './components/charts/barChart';
import {useEffect, useState} from 'react';
import styles from './App.module.css';

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
      <Chart data={data} country={'israel'} />
    </div>
  );
}

export default App;
