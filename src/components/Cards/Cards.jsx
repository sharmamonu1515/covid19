import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from "./Cards.module.css";

const Cards = (props) => {

  const { data:  { cases, recovered, deaths, updated } }= props;

  if (!cases) { return  'Loading...'; }
  
  const displayData = [
    {
      type: 'infected',
      total: cases,
      description: 'Number of active cases of COVID-19'
    },
    {
      type: 'recovered',
      total: recovered,
      description: 'Number of recovered cases of COVID-19'
    },
    {
      type: 'deaths',
      total: deaths,
      description: 'Number of deaths caused by COVID-19'
    }
  ];

  return (
    <div className={styles.container}>
      <Grid container spacing={3} jusitfy="center">
        {
          displayData.map( (data, index) => (
            <Grid key={index} item component={Card} xs={12} md={3} className={cx(styles.card, styles[data['type']])}>
              <CardContent>
                <Typography color="textSecondary" className={styles.cardLabel} gutterBottom>{data.type}</Typography>
                <Typography variant="h5">
                  <CountUp start={0} end={data.total} duration={2.5} separator="," />
                </Typography>
                <Typography color="textSecondary">{new Date(updated).toDateString()}</Typography>
                <Typography variant="body2">
                  {data.description}
                </Typography>
              </CardContent>
            </Grid>
          ))
        }
        
        {/* <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Infected</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={totalConfirmed} duration={2.5} separator="," />
            </Typography>
            <Typography variant="body2">
              Number of active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={totalRecovered} duration={2.5} separator="," />
            </Typography>
            <Typography variant="body2">
              Number of recovered cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={totalDeaths} duration={2.5} separator="," />
            </Typography>
            <Typography variant="body2">
              Number of deaths caused by COVID-19
            </Typography>
          </CardContent>
        </Grid> */}

      </Grid>
    </div>
  );
};

export default Cards;
