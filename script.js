(() => {

  const companies = [
    {id: 1, name: 'Amazon', location: 'Seattle'},
    {id: 2, name: 'Apple', location: 'Cupertino'},
    {id: 3, name: 'Facebook', location: 'Menlo Park'},
    {id: 4, name: 'Google', location: 'Mountain View'},
    {id: 5, name: 'Leeroy', location: 'Sundsvall'},
    {id: 6, name: 'Tesla', location: 'Palo Alto'}
  ]
  
  function cut(companies) {
    const cutCompanies = []
    for(let each of companies) {
      cutCompanies.push({name: each.name, location: each.location})
    }
    return cutCompanies;
  }

  const cutCompanies = cut(companies)
  for(let each of cutCompanies) {
    createLi(each);
  }

  function createLi(company) {
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.className = company.location;
    li.appendChild(document.createTextNode("Company name: "+company.name+", location: "+company.location));
    ul.appendChild(li);
  }

  //adding eventhandler with clickfunction bound to ul instead and using it on the target
  document.getElementById("list").addEventListener("click", function(e) { {
      e.target.style.color = "red"; 
      setTimeout(() => {
        e.target.style.color = 'lightgray'  
      }, 2000);
    }
  });

  const uniqueLocations = [...new Set(companies.map(x => x.location))];
  var fil = document.getElementById("filter");
  for(let each of uniqueLocations){
    var lf = document.createElement('input');
    var lt = document.createElement("P");
    lf.setAttribute('type', 'checkbox');
    lf.setAttribute('name', each);
    lt.appendChild(document.createTextNode(each));
    lf.setAttribute('checked', 'true')
    lf.addEventListener('change', function(event) {
      changeState(event.target.name);
    });
    fil.appendChild(lt)
    fil.appendChild(lf)
  }

  function changeState(className) {
    const items = document.getElementsByClassName(className)
    for(let each of items) {
      if (each.style.display != "none") {
        each.style.display = "none";
      }
      else {
        each.style.display = "block";
      }
    }
  }
})()
