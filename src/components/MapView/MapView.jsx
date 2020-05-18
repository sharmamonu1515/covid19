import React from "react";
import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { fetchCountryDetails } from "../../api";

import styles from "./MapView.module.css";

Leaflet.Icon.Default.imagePath = "../node_modules/leaflet";

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

function formatNumber(number) {
  return number ? new Intl.NumberFormat().format(number) : "";
}

const MapView = () => {
  const [countries, setCountries] = React.useState([]);

  React.useEffect(() => {
    const getCountriesDetails = async () => {
      const countriesData = await fetchCountryDetails();
      const filteredCountries = countriesData.filter(
        (countryData) => countryData.cases > 0
      );
      setCountries(filteredCountries);
    };
    getCountriesDetails();
  }, []);

  const mapMarkers = countries.map((country) => {
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
            <img
              src={country.countryInfo.flag}
              width="80px"
              title={country.country}
              alt="flag"
            />
            <span>{formatNumber(country.cases)}</span>
          </div>
        </Popup>
      </Marker>
    );
  });

  return (
    <Map center={{ lat: 33, lng: 65 }} zoom={3}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.png"
      />
      {mapMarkers}
    </Map>
  );
};

export default MapView;
