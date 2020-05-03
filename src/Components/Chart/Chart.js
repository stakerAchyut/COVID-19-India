import React from 'react';
import { fetchDailyData } from '../../API';
import { Line, Bar } from 'react-chartjs-2';

class Chart extends React.Component {
  state = {
    data: [],
  };

  async componentDidMount() {
    const fetchedData = await fetchDailyData();
    this.setState({
      data: fetchedData,
    });
    console.log('Inside Chart: ', this.state.data);
  }

  render() {
    const { data, states } = this.props;
    const container = {
      display: 'flex',
      justifyContent: 'center',
      width: '75%',
      marginBottom: '50px',
    };
    const lineChart = this.state.data.length ? (
      <Line
        data={{
          labels: this.state.data.map(({ date }) => date),
          datasets: [
            {
              data: this.state.data.map(({ confirmed }) => confirmed),
              label: 'Confirmed',
              borderColor: 'rgb(0, 255, 255)',
              fill: true,
            },
            {
              data: this.state.data.map(({ active }) => active),
              label: 'Active',
              borderColor: 'rgb(0, 0, 255)',
              fill: true,
            },
            {
              data: this.state.data.map(({ deaths }) => deaths),
              label: 'Deaths',
              borderColor: 'rgb(255, 0, 0)',
              fill: true,
            },
            {
              data: this.state.data.map(({ recovered }) => recovered),
              label: 'Recovered',
              borderColor: 'rgb(0, 255, 0)',
              fill: true,
            },
          ],
        }}
      />
    ) : null;

    const barChart = this.state.data.length ? (
      <Bar
        data={{
          labels: ['Active', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: [
                'rgba(0, 0, 255, 0.5)',
                'rgba(0, 255, 0, 0.5)',
                'rgba(255, 0, 0, 0.5)',
              ],
              data: [data.active, data.recovered, data.deaths],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current in ${states}` },
        }}
      />
    ) : null;

    return (
      <div style={container}>{states.length !== 0 ? barChart : lineChart}</div>
    );
  }
}

export default Chart;
