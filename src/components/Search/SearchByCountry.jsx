import React from 'react';
import TextField from '@material-ui/core/TextField';

const SearchByCountry = (props) => {
  return  <TextField id="standard-search" label="Search" type="search" onChange={ (e) => props.filterCountries(e.target.value)} />
}

export default SearchByCountry;