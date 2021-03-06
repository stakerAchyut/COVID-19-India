import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import moment from 'moment';

const card = {
  container: (matchMid, matches) => ({
    margin: matchMid ? '2% 4%' : matches ? '2% 8%' : '0 2%',
  }),
};

const gridStyle = {
  container: (matchMid) => ({
    margin: matchMid ? '25px 0' : '50px 0',
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
  const matches = useMediaQuery('(max-width:900px)');
  const matchMid = useMediaQuery('(max-width:770px)');
  return (
    <div>
      <Grid container justify="center" style={gridStyle.container(matchMid)}>
        <Grid
          item
          component={Card}
          xs={12}
          md={2}
          style={Object.assign(
            {},
            card.container(matchMid, matches),
            confirmed
          )}
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
                {moment(props.data.lastupdatedtime, 'DD-MM-YYYY').format(
                  'ddd MMM DD YYYY'
                )}
              </Typography>
              <Typography variant="body2">
                Total confirmed cases of COVID&#8209;19
              </Typography>
            </CardContent>
          )}
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={2}
          style={Object.assign({}, card.container(matchMid, matches), active)}
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
                {moment(props.data.lastupdatedtime, 'DD-MM-YYYY').format(
                  'ddd MMM DD YYYY'
                )}
              </Typography>
              <Typography variant="body2">
                Number of active cases of COVID&#8209;19
              </Typography>
            </CardContent>
          )}
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={2}
          style={Object.assign(
            {},
            card.container(matchMid, matches),
            recovered
          )}
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
                {moment(props.data.lastupdatedtime, 'DD-MM-YYYY').format(
                  'ddd MMM DD YYYY'
                )}
              </Typography>
              <Typography variant="body2">
                Number of recoveries from COVID&#8209;19
              </Typography>
            </CardContent>
          )}
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={2}
          style={Object.assign({}, card.container(matchMid, matches), deaths)}
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
                {moment(props.data.lastupdatedtime, 'DD-MM-YYYY').format(
                  'ddd MMM DD YYYY'
                )}
              </Typography>
              <Typography variant="body2">
                Number of deaths caused by COVID&#8209;19
              </Typography>
            </CardContent>
          )}
        </Grid>
      </Grid>
    </div>
  );
};
export default Cards;
