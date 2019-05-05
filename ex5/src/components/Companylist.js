import React from 'react';
import companies from '../Companies';
import { connect } from 'react-redux';

function Companylist(props) {
  function onClick (e) {
    let elem = e.target;
    elem.style.color = "red"; 
      setTimeout(() => { 
        elem.style.color = 'lightgray'  
      }, 2000);
    }

  const companyList = companies.filter(company => {
    return props.visible[company.location];
  }).map((each) => { 
    return (
      <li key={ each.name } className={each.location}>{"Company name: "+each.name+", location: "+each.location}</li>
    );
  });

  return (
    <ul onClick={onClick.bind(this)}>{companyList}</ul>
  );
}

export default connect(
  state => {
    return {
      visible: state.visible
    };
  }
)(Companylist);