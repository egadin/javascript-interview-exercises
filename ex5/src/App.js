import React from 'react';
import './App.css';
import Companylist from './components/Companylist';
import FilterList from './components/Filterlist'
import companies from './Companies';

const locations = new Set(companies.map(x => x.location));

class App extends React.Component {
  constructor(props) {
    super(props);

    let visible = {};

    for (let location of locations.entries()) {
      visible[location[0]] = true;
    }

    this.state = {
      visible
    };
  }

  render() {
    return (
      <div className="App">
        <FilterList />
        <Companylist />
      </div>
    );
  }
}

export default App;
