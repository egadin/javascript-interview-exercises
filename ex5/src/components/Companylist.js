import React from 'react';

function Companylist(props) {

  function onClick (e) {
    let elem = e.target;
    elem.style.color = "red"; 
      setTimeout(() => { 
        elem.style.color = 'lightgray'  
      }, 2000);
    }

  const comp = props.companies;
  const companyList = comp.map((each) => { 
    return(
    <li key={ each.name } className={each.location}>{"Company name: "+each.name+", location: "+each.location}</li>
    );
  });

  return (
    <ul onClick={onClick.bind(this)}>{companyList}</ul>
  );
}

export default Companylist;