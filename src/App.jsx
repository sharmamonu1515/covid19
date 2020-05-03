import React from "react";
import styles from "./App.module.css";

import { Cards, Charts, CountryPicker, CountryDetails } from "./components";

import { fetchData } from "./api";

class App extends React.Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data: data });
  }

	render() {
		const { data } = this.state;
    return (
      <div className={styles.container}>
        <h1>App</h1>
        <Cards data={data}/>
        <Charts />
        <CountryDetails />
        <CountryPicker />
      </div>
    );
  }
}

export default App;
