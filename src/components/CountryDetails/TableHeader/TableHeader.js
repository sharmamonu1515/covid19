import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import PropTypes from 'prop-types';


function TableHeader(props) {

  const headCells = [
    { id: 'country', numeric: false, label: 'Country' },
    { id: 'cases', numeric: true, label: 'Total Cases' },
    { id: 'todayCases', numeric: true, label: 'New Cases' },
    { id: 'deaths', numeric: true, label: 'Total Deaths' },
    { id: 'todayDeaths', numeric: true, label: 'New Deaths' },
    { id: 'recovered', numeric: true, label: 'Total Recovered' },
    { id: 'active', numeric: true, label: 'Active Cases' },
    { id: 'critical', numeric: true, label: 'Serious' },
    { id: 'casesPerOneMillion', numeric: true, label: 'Total Cases / Per 1M' },
    { id: 'deathsPerOneMillion', numeric: true, label: 'Deaths / Per 1M' },
    // { id: 'tests', numeric: true, label: 'Tests' },
    // { id: 'testsPerOneMillion', numeric: true, label: 'Tests / Per 1M' },
  ];

  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align='left'
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

TableHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
};

export default TableHeader;
