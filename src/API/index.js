import axios from 'axios';
import "regenerator-runtime/runtime";

const url = 'https://api.covid19india.org/data.json';

export const fetchData = async () => {
  try {
    const {
      data: { statewise },
    } = await axios.get(url);
    return statewise;
  } catch (error) {}
};

export const fetchDailyData = async () => {
  try {
    const {
      data: { cases_time_series },
    } = await axios.get(url);
    const modifiedData = cases_time_series.map((dailyData) => ({
      confirmed: dailyData.totalconfirmed,
      active: dailyData.totalconfirmed - dailyData.totalrecovered,
      deaths: dailyData.totaldeceased,
      recovered: dailyData.totalrecovered,
      date: dailyData.date,
    }));
    return modifiedData;
  } catch (error) {}
};

export const fetchAPI = async () => {
  try {
    const {
      data: { statewise },
    } = await axios.get(url);
    const modifiedData = statewise.map((states) => states.state);
    return modifiedData;
  } catch (error) {}
};
