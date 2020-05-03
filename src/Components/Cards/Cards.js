import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const card = {
  container: (matches) => ({
    margin: matches ? '2% 0' : '0 2%',
  }),
};

const confirmed = {
  borderBottom: '10px solid rgba(0, 255, 255, 0.5)',
};

const active = {
  borderBottom: '10px solid rgba(0, 0, 255, 0.5)',
};

const recovered = {
  borderBottom: '10px solid rgba(0, 255, 0, 0.5)',
};

const deaths = {
  borderBottom: '10px solid rgba(255, 0, 0, 0.5)',
};

const Cards = (props) => {
  console.log(props.data);
  const matches = useMediaQuery('(max-width:770px)');
  return (
    <div>
      <Grid container justify="center" style={{ margin: '50px 0px' }}>
        <Grid
          item
          component={Card}
          xs={12}
          md={2}
          style={Object.assign({}, card.container(matches), confirmed)}
        >
          {props.data && (
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Confirmed
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={parseInt(props.data.confirmed)}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(props.data.lastupdatedtime).toDateString()}
              </Typography>
              <Typography variant="body2">
                Total number of COVID-19 cases
              </Typography>
            </CardContent>
          )}
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={2}
          style={Object.assign({}, card.container(matches), active)}
        >
          {props.data && (
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Active
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={parseInt(props.data.active)}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(props.data.lastupdatedtime).toDateString()}
              </Typography>
              <Typography variant="body2">
                Number of active cases of COVID-19
              </Typography>
            </CardContent>
          )}
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={2}
          style={Object.assign({}, card.container(matches), recovered)}
        >
          {props.data && (
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Recovered
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={parseInt(props.data.recovered)}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(props.data.lastupdatedtime).toDateString()}
              </Typography>
              <Typography variant="body2">
                Number of recoveries from COVID-19
              </Typography>
            </CardContent>
          )}
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={2}
          style={Object.assign({}, card.container(matches), deaths)}
        >
          {props.data && (
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Deaths
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={parseInt(props.data.deaths)}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(props.data.lastupdatedtime).toDateString()}
              </Typography>
              <Typography variant="body2">
                Number of deaths caused by COVID-19
              </Typography>
            </CardContent>
          )}
        </Grid>
      </Grid>
    </div>
  );
};
export default Cards;
