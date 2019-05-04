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
    li.appendChild(document.createTextNode("Company name: "+company.name+", location: "+company.location));
    li.onclick = clickFunction
    ul.appendChild(li);
  }

  function clickFunction() {
    this.style.color = 'red'
    setTimeout(() => {
      this.style.color = 'lightgray'  
    }, 2000);
  }
})()
