import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';

import { Cards, Charts, CountryDetails, MapView } from "./components";
import Header from './components/Header/Header';
import { fetchData } from "./api";

import styles from "./App.module.css";

class App extends React.Component {
  state = {
    data: {},
    country: ''
  };

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data: data });
  }

	render() {
		const { data } = this.state;
    return (
      <BrowserRouter basename={'/covid19'}>
        <div className={styles.container}>
          <Header />
          <Cards data={data} />
          <Route path="/" exact component={CountryDetails} /> 
          <Route path="/charts" component={Charts} /> 
          <Route path="/map" component={MapView} /> 
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
