import axios from 'axios';

const url = 'https://corona.lmao.ninja/v2';

export const fetchData = async () => {
  try {
    const { cases, recovered, deaths, updated } = await fetch(`${url}/all`)
      .then(response => response.json());
    return { cases, recovered, deaths, updated }
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
    return await fetch(`${url}/countries`).then(response => response.json());
  } catch (error) {
    
  }
}

export const fetchCountries = async () => {
  try {
    const { data } = await axios.get('https://api.covid19api.com/countries');
    return data.map((country) => country.Country);
  } catch(error) {

  }
}

// https://documenter.getpostman.com/view/11144369/Szf6Z9B3?version=latest