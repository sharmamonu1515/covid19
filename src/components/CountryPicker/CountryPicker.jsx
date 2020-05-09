import React, { useEffect, useState } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';

const CountryPicker = (props) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    }
    fetchAPI();
  }, [setCountries]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect onChange={(event) => props.handleCountryChange(event.target.value)}>
        <option value="global">Global</option>
        {
          countries.map((country, i) => <option value={country} key={i}>{country}</option>)
        }
      </NativeSelect>
    </FormControl>
  );
}

export default CountryPicker;