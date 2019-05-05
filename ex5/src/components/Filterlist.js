import React from 'react';
import { connect } from 'react-redux';
import { changeVisibility } from '../actions/ChangeVisibility';
import { locations } from '../Companies';


function FilterList(props) {

  const filterList = Array.from(locations).map(each => (
    <div key={ each }>
      <p>{ each }</p>
      <input
        type="checkbox"
        checked={ props.visible[each] }
        onChange={(e) => {
          props.changeVisibility(each, e.target.checked);
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

export default connect(
  state => {
    return {
      visible: state.visible
    };
  },
  dispatch => {
    return {
      changeVisibility: (location, visible) => {
        dispatch(changeVisibility(location, visible));
      }
    };
  }
)(FilterList);