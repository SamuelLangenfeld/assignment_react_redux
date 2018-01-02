import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GroceryListContainer from './containers/GroceryListContainer';
import AddItemContainer from './containers/AddItemContainer';
import FilterButtonContainer from './containers/FilterButtonContainer';
import SortButtonContainer from './containers/SortButtonContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <GroceryListContainer />
        <AddItemContainer />
        <FilterButtonContainer filter="SHOW_ALL" />
        <FilterButtonContainer filter="PURCHASED" />
        <SortButtonContainer sortOrder="ASC" sortCategory="name" />
        <SortButtonContainer sortOrder="DESC" sortCategory="name" />
         <SortButtonContainer sortOrder="ASC" sortCategory="description" />
        <SortButtonContainer sortOrder="DESC" sortCategory="description" />
      </div>
    );
  }
}

export default App;
