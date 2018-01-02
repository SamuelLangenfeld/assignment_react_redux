import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AccountListContainer from './containers/AccountListContainer'
import SearchInputContainer from './containers/SearchInputContainer'
import ViewAccountContainer from './containers/ViewAccountContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AccountListContainer />
        <SearchInputContainer />
        <ViewAccountContainer />
      </div>
    );
  }
}

export default App;
