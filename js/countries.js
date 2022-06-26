const loadCountries = () => {
     fetch('https://restcountries.com/v3.1/all')
          .then(res => res.json())
          .then(data => displayCountries(data))
}
loadCountries();
const displayCountries = (countries) => {
     const container = document.getElementById('countries');
     countries.forEach(country => {
          const div = document.createElement('div');
          div.classList.add('country');
          div.innerHTML = `
            <h2> Name : ${country.name.common} </h2>
            <p> Capital : ${country.capital} </p>
            <button onclick="displayCountryDetailsLoad('${country.name.common}')">Details</button>
          `
          // const h2 = document.createElement('h2');
          // const p = document.createElement('p');
          // h2.innerText = ` Name : ${country.name.official}`;
          // p.innerText = ` Capital : ${country.capital}`;
          // div.appendChild(h2);
          // div.appendChild(p);
          container.appendChild(div);
     })

};

const displayCountryDetailsLoad = name => {
     // console.log(name);
     const url = `https://restcountries.com/v3.1/name/${name}`;
     fetch(url)
          .then(res => res.json())
          .then(data => displayCountryDetail(data[0]))

}
const displayCountryDetail = country => {
     console.log(country);
     const countryDetail = document.getElementById('country-detail');
     countryDetail.innerHTML = `
         <h4>${country.name.common}</h4>
         <img src="${country.flags.png}" width="200px" alt="" />
     
     `
}