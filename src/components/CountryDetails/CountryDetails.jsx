import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableHeader from './TableHeader/TableHeader';

import { fetchCountryDetails } from '../../api';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
    marginTop: '100px'
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  deathsCell: {
    backgroundColor: 'red',
    color: '#fff',
    fontWeight: 'bold'
  },
  newCasesCell: {
    backgroundColor: '#ffd68b',
  }
}));

function formatNumber(number) {
  return new Intl.NumberFormat().format(number);
}

const CountryDetails = () => {
  const [ countries, setCountries ] = useState([]);

  useEffect(() => {
    const getCountriesDetails = async () => {
      const countriesData = await fetchCountryDetails();
      const filteredCountries = countriesData.countries.filter(countryData =>
          countryData.TotalConfirmed > 0 || 
          countryData.NewConfirmed > 0 ||
          countryData.TotalDeaths > 0 ||
          countryData.NewDeaths > 0 ||
          countryData.TotalRecovered > 0 ||
          countryData.NewRecovered > 0
      );
      setCountries(filteredCountries);
    }
    getCountriesDetails();
  }, []);

  const classes = useStyles();
  const [order, setOrder] = React.useState('desc');
  const [orderBy, setOrderBy] = React.useState('TotalConfirmed');

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer>
          <Table className={classes.table}>
            <TableHeader
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {stableSort(countries, getComparator(order, orderBy))
                .map((country, index) => {
                  return (
                    <TableRow key={country.CountryCode}>
                      <TableCell align="left">{country.Country}</TableCell>
                      <TableCell align="left">
                        {formatNumber(country.TotalConfirmed)}
                      </TableCell>
                      <TableCell align="left" className={country.NewConfirmed > 0 ? classes.newCasesCell : ''}>
                        {formatNumber(country.NewConfirmed)}{country.NewConfirmed > 0 ? '+' : ''}
                      </TableCell>
                      <TableCell align="left">
                        {formatNumber(country.TotalDeaths)}
                      </TableCell>
                      <TableCell align="left" className={country.NewDeaths > 0 ? classes.deathsCell : ''}>
                        {formatNumber(country.NewDeaths)}{country.NewDeaths > 0 ? '+' : ''}
                      </TableCell>
                      <TableCell align="left">
                        {formatNumber(country.TotalRecovered)}
                      </TableCell>
                      <TableCell align="left">
                        {formatNumber(country.NewRecovered)}
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}

export default CountryDetails;