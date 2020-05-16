import React from "react";
import styles from "./App.module.css";

import { Cards, Charts, CountryDetails } from "./components";

import { fetchData } from "./api";

class App extends React.Component {
  state = {
    data: {},
    country: ''
  };

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data: data });
  }

  handleCountryChange = async (country) => {
    // fetch data 
    // set state
  }

	render() {
		const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data}/>
        <Charts />
        <CountryDetails />
      </div>
    );
  }
}

export default App;
