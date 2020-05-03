import React from 'react';
import { Select, FormControl, MenuItem, InputLabel } from '@material-ui/core';
import { fetchAPI } from './../../API';
import styles from './StatePicker.module.css';

class StatePicker extends React.Component {
  state = {
    data: [],
  };

  async componentDidMount() {
    const fetchedData = await fetchAPI();
    fetchedData.shift();
    this.setState({
      data: fetchedData,
      name: '',
    });
    console.log('Inside StatePicker: ', this.state.data);
  }
  render() {
    return (
      <FormControl className={styles.pickerStyle}>
        <InputLabel id="inputLabel">Total</InputLabel>
        <Select
          labelId="inputLabel"
          value={this.state.name}
          onChange={(e) => {
            this.props.handleStates(e.target.value);
            this.setState({
              name: e.target.value,
            });
          }}
        >
          <MenuItem value="Total">Total</MenuItem>
          {this.state.data.map((states, i) => (
            <MenuItem value={states} key={i}>
              {states}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
}
export default StatePicker;
