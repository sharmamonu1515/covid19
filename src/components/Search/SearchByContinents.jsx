import React from 'react';
import Button from '@material-ui/core/Button';

const SearchByContinents = (props) => {
  const continents = [
    { label: 'All', value: 'All' },
    { label: 'Africa', value: 'Africa' },
    { label: 'Asia', value: 'Asia' },
    { label: 'Europe', value: 'Europe' },
    { label: 'North America', value: 'North America' },
    { label: 'Oceania', value: 'Australia/Oceania' },
    { label: 'South America', value: 'South America' },
  ];

  return continents.map((continent, i) => (<Button key={i} variant="contained" size="small" className={props.classes.margin} color="primary" onClick={(e) => props.filterByContinent(continent.value) }>{continent.label}</Button>))
}

export default SearchByContinents;