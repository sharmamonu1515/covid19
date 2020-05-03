import React, { useEffect,useState } from 'react';
import { Line } from 'react-chartjs-2';
import { fetchDailyData } from '../../api';

import styles from './Charts.module.css';

const Charts = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setDailyData(await fetchDailyData());
    }
    fetchApi();
  });

  const lineChart = (
    dailyData.length ? (<Line
      data={{
        labels: dailyData.map(( { date }) => date),
        datasets: [{
          data: dailyData.map(({ confirmed }) => confirmed),
          label: 'Infected',
          borderColor: '#3333ff',
          backgroundColor: 'rgba(0, 0, 255, 0.3)',
          fill: true
        }, {
          data: dailyData.map(({ deaths }) => deaths),
          label: 'Deaths',
          borderColor: 'rgba(255, 0, 0, 0.5)',
          backgroundColor: 'rgba(255, 0, 0, 0.5)',
          fill: true
        }]
      }}
    />) : null
  );

  return <div className={styles.container}>
    {lineChart}
  </div>;
}

export default Charts;