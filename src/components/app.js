import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader/root';

class App extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>pee is stored in the Makefile</h1>
      </div>
    );
  }
}

// https://github.com/facebook/prop-types#usage
App.propTypes = {
  example: PropTypes.string,
}

export default hot(App);
