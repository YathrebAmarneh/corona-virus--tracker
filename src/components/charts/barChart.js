import React, {useState, useEffect} from 'react';
import {Bar, Line} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';
import axios from 'axios';
import styles from './charts.module.css';
import {fetchData, fetchDailyData} from '../../API';
function BarChart({data: {confirmed, recovered, deaths}, country}) {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await fetchDailyData();

      setDailyData(initialDailyData);
    };

    fetchMyAPI();
  }, []);

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ['Infected', 'Recovered', 'Deaths'],
        datasets: [
          {
            label: 'People',
            backgroundColor: [
              'rgba(0, 0, 255, 0.5)',
              'rgba(0, 255, 0, 0.5)',
              'rgba(255, 0, 0, 0.5)',
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
    />
  ) : null;

  const lineChart = dailyData[0] ? (
    <Line
      data={{
        labels: dailyData.map(({date}) => new Date(date).toLocaleDateString()),
        datasets: [
          {
            data: dailyData.map((data) => data.confirmed),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true,
          },
          {
            data: dailyData.map((data) => data.deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true,
          },
          {
            data: dailyData.map((data) => data.recovered),
            label: 'Recovered',
            borderColor: 'green',
            backgroundColor: 'rgba(0, 255, 0, 0.5)',
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  // data.datasets.data = coronaRecord.confirmed;
  // console.log(coronaRecord.confirmed);
  // Object.values(coronaRecord).map((item) => console.log(item.value));

  // console.log(data);
  // coronaRecord.map((data) => {
  //   if (data.countryRegion === 'France') return data.confirmed;
  // })
  return <div className={styles.charts}>{country ? barChart : lineChart}</div>;
}

export default BarChart;
