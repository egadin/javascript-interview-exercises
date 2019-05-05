import React from 'react';
import './App.css';
import Companylist from './components/Companylist';
import FilterList from './components/Filterlist'

const companies = [
  {id: 1, name: 'Amazon', location: 'Seattle'},
  {id: 2, name: 'Apple', location: 'Cupertino'},
  {id: 3, name: 'Facebook', location: 'Menlo Park'},
  {id: 4, name: 'Google', location: 'Mountain View'},
  {id: 5, name: 'Leeroy', location: 'Sundsvall'},
  {id: 6, name: 'Tesla', location: 'Palo Alto'}
];

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
        <FilterList
          locations={ locations }
          onFilterChange={(item, filtered) => {
            this.setState({
              visible: {
                ...this.state.visible,
                [item]: filtered
              }
            });
            console.log({
              visible: {
                ...this.state.visible,
                [item]: filtered
              }
            });
          }}
        />
      <Companylist
        companies={ companies.filter(company => this.state.visible[company.location]) }
      />
      </div>
    );
  }
}

export default App;
