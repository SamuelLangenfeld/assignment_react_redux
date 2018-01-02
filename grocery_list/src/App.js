import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GroceryListContainer from './containers/GroceryListContainer';
import AddItemContainer from './containers/AddItemContainer';
import FilterButtonContainer from './containers/FilterButtonContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GroceryListContainer />
        <AddItemContainer />
        <FilterButtonContainer />
      </div>
    );
  }
}

export default App;
