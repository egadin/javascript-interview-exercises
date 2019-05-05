import React from 'react';
import App from '../App';
import ReactDOM from 'react-dom';
import Companylist from './Companylist';

class FilterList extends React.Component {
  constructor (props)
  {
    super(props);

    let items = Array.from(this.props.locations);

    this.state = {
      items,
      enabled: [...new Array(items.length)].map(_ => true)
    };
  }

  render() {
    console.log(this.state.enabled);

    const filterList = this.state.items.map((each, i) => (
      <div key={ each }>
        <p>{ each }</p>
        <input
          type="checkbox"
          checked={ this.state.enabled[i] }
          onChange={(e) => {
            let newEnabled = [...this.state.enabled];
            newEnabled[i] = e.target.checked;

            console.log(newEnabled);

            this.setState({
              enabled: newEnabled
            });
            this.props.onFilterChange(each, e.target.checked);
          }}
        />
      </div>
    ));

    return (
      <div>
        <h2>Filter on locations by selecting boxes</h2>
        { filterList }
      </div>
    );
  }
}

export default FilterList;