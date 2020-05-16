import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableHeader from "./TableHeader/TableHeader";
import SearchByCountry from "../Search/SearchByCountry";
import SearchByContinents from "../Search/SearchByContinents";

import Leaflet from "leaflet";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { fetchCountryDetails } from "../../api";

import styles from "./CountryDetails.module.css";

Leaflet.Icon.Default.imagePath = "../node_modules/leaflet";

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

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
  return order === "desc"
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
    width: "95%",
    marginTop: "100px",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  tableHead: {
    fontWeight: "bold",
    color: "#000",
    "&:hover": {
      color: "rgba(0, 0, 0, 0.7)",
    },
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 1,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
  success: {
    backgroundColor: "rgba(118, 251, 118, 0.25)",
  },
  deathsCell: {
    backgroundColor: "red",
    color: "#fff",
    fontWeight: "bold",
  },
  newCasesCell: {
    backgroundColor: "#ffd68b",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

function formatNumber(number) {
  return number ? new Intl.NumberFormat().format(number) : "";
}

const CountryDetails = () => {
  const [countries, setCountries] = React.useState([]);
  const [countriesCopy, setCountriesCopy] = React.useState([]);
  const [activeContinent, setActiveContinent] = React.useState("All");
  const [order, setOrder] = React.useState("desc");
  const [orderBy, setOrderBy] = React.useState("cases");
  const classes = useStyles();

  React.useEffect(() => {
    const getCountriesDetails = async () => {
      const countriesData = await fetchCountryDetails();
      const filteredCountries = countriesData.filter(
        (countryData) => countryData.cases > 0
      );
      setCountries(filteredCountries);
      setCountriesCopy(filteredCountries);
    };
    getCountriesDetails();
  }, []);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const filterCountries = (value) => {
    let filteredCountries = [];
    if (value === "") {
      return filterByContinent(activeContinent); // return and show active continent values
    } else {
      const search = value.toLowerCase();
      filteredCountries = countries.slice().filter((country) => {
        return (
          country.country.toLowerCase().includes(search) ||
          (country.continent &&
            (activeContinent !== "All"
              ? country.continent === activeContinent
              : true) &&
            country.continent.toLowerCase().includes(search)) ||
          (country.countryInfo.iso2 &&
            country.countryInfo.iso2.toLowerCase().includes(search)) ||
          (country.countryInfo.iso3 &&
            country.countryInfo.iso3.toLowerCase().includes(search))
        );
      });
    }
    setCountries(filteredCountries);
  };

  const filterByContinent = (value) => {
    let filteredCountries = [];
    if (value === "All") {
      filteredCountries = countriesCopy;
    } else {
      filteredCountries = countriesCopy.slice().filter((country) => {
        return country.continent && country.continent === value;
      });
    }
    setCountries(filteredCountries);
    setActiveContinent(value);
  };

  const mapMarkers = countriesCopy.map((country) => {
    return (
      <Marker
        key={country.country}
        position={{
          lat: country.countryInfo.lat,
          lng: country.countryInfo.long,
        }}
      >
        <Popup>
          <div className={styles.mapMarkers}>
            <img src={country.countryInfo.flag} width="80px" title={country.country} alt="flag" />
            <span>{formatNumber(country.cases)}</span>
          </div>
        </Popup>
      </Marker>
    );
  });

  return (
    <div className={classes.root}>
     <SearchByContinents filterByContinent={filterByContinent} classes={classes} active={activeContinent} />
      <SearchByCountry filterCountries={filterCountries} className={classes.margin} />
      <Paper className={classes.paper}>
        <TableContainer className={styles.tableContainer}>
          <Table className={classes.table} border={1} bordercolor="#e0e0e0">
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
                    <TableRow key={country.country} className={country.cases === country.recovered ? classes.success : ''}>
                      <TableCell align="left">{country.country}</TableCell>
                      <TableCell align="left">
                        {formatNumber(country.cases)}
                      </TableCell>
                      <TableCell align="left" className={country.todayCases ? classes.newCasesCell : ''}>
                        {country.todayCases ? formatNumber(country.todayCases) + '+' : ''}
                      </TableCell>
                      <TableCell align="left">
                        {formatNumber(country.deaths)}
                      </TableCell>
                      <TableCell align="left" className={country.todayDeaths ? classes.deathsCell : ''}>
                        {country.todayDeaths ? formatNumber(country.todayDeaths) + '+' : ''}
                      </TableCell>
                      <TableCell align="left">
                        {formatNumber(country.recovered)}
                      </TableCell>
                      <TableCell align="left">
                        {formatNumber(country.active)}
                      </TableCell>
                      <TableCell align="left">
                        {formatNumber(country.critical)}
                      </TableCell>
                      <TableCell align="left">
                        {formatNumber(country.casesPerOneMillion)}
                      </TableCell>
                      <TableCell align="left">
                        {formatNumber(country.deathsPerOneMillion)}
                      </TableCell>
                      {/* <TableCell align="left">
                        {formatNumber(country.tests)}
                      </TableCell>
                      <TableCell align="left">
                        {formatNumber(country.testsPerOneMillion)}
                      </TableCell> */}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <Map center={{ lat: 33, lng: 65 }} zoom={3}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.png"
      />
        { mapMarkers }
      </Map>
    </div>
  );
};

export default CountryDetails;
