import React from 'react';
import history from '../history/index';
import DashBoardScreen from './DashboardScreen';

class Home extends React.Component {

    componentDidMount() {
        history.push('/dashboard')
    }

    render() {

      return (
        <div>Redirecting...</div>
      );
    }
  }

  export default Home;