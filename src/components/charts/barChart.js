import React, {useState, useEffect} from 'react';
import {Bar, Chart, Line} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';
// import {UserData} from '../../myData';
import axios from 'axios';
function BarChart() {
  const [isFetched, setIsFetch] = useState(true);
  const [coronaRecord, setCoronaRecord] = useState({});
  // console.log(UserData);
  // const arr = Object.values(coronaRecord).map((data) => data.value);
  const labels = ['infected', 'recovered', 'deaths', 'Active'];
  const [data, setData] = useState({
    labels: labels.map((item) => item),
    datasets: [
      {
        label: 'COVID-19 statistics',
        data: coronaRecord.confirmed, //here is can not add confirmed value
        backgroundColor: ['rgba(75,192,192,1)', 'white', 'rvalueed', '#f3ba2f'],
        borderColor: 'black',
        borderWidth: 2,
      },
    ],
  });

  const getData = async () => {
    setIsFetch(true);
    const response = await axios.get(
      'https://covid19.mathdro.id/api/confirmed'
    );
    const [arr] = response.data.filter(
      (data) => data.countryRegion === 'Lithuania'
    );
    setCoronaRecord(arr);
    setIsFetch(false);
  };
  // console.log(Object.values(coronaRecord));
  useEffect(() => {
    getData();
  }, []);

  if (isFetched) {
    return 'Data is Loading ...';
  }
  data.datasets.data = coronaRecord.confirmed;
  console.log(coronaRecord.confirmed);
  // Object.values(coronaRecord).map((item) => console.log(item.value));

  // console.log(data);
  // coronaRecord.map((data) => {
  //   if (data.countryRegion === 'France') return data.confirmed;
  // })
  return <Bar data={data} />;
}

export default BarChart;
