import React from 'react';
import './App.css';
import Cards from './Components/Cards/Cards';
import Chart from './Components/Chart/Chart';
import StatePicker from './Components/StatePicker/StatePicker';
import { fetchData } from './API';
import covidImage from './Images/covid.png';
import { Typography } from '@material-ui/core';

class App extends React.Component {
  state = {
    data: [],
    states: '',
    value: {},
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({
      data: fetchedData,
      value: fetchedData[0],
    });
    // this.state.data.shift();
    console.log(this.state.data);
  }
  handleStates = async (states) => {
    var temp;
    for (let val of this.state.data) {
      if (val.state === states) {
        temp = val;
        break;
      }
    }
    this.setState({
      value: temp,
      states: states,
    });
    console.log(temp);
  };
  isEmpty = () => {
    for (var i in this.state.value) {
      return false;
    }
    return true;
  };
  render() {
    const { value, states } = this.state;
    console.log('value: ', this.isEmpty(value));
    return (
      <div className="App">
        {!this.isEmpty(value) && (
          <React.Fragment>
            <img className="imgStyle" src={covidImage} alt="COVID-19" />
            <Cards data={value} />
            <StatePicker handleStates={this.handleStates} />
            <Chart data={value} states={states} />
            <Typography>@Achyut Utpal</Typography>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default App;
