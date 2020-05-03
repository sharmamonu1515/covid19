import axios from 'axios';

// const url = 'https://api.covid19api.com';

export const fetchData = async () => {
  try {
    const { confirmed, recovered, deaths, lastUpdate } = await fetch(`https://covid19.mathdro.id/api/`)
      .then(response => response.json());
    return { confirmed, recovered, deaths, lastUpdate }
  } catch (error) {

  }
}

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get('https://covid19.mathdro.id/api/daily');
    const modifiedData = data.map(dailyData => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    return modifiedData;
  } catch (error) {
      
  }
}

export const fetchCountryDetails = async () => {
  try {
    const { Countries } = await fetch('https://api.covid19api.com/summary').then(response => response.json());
    return { countries: Countries };
  } catch (error) {
    
  }
}