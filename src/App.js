import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}

function LoadCountries(){
  const [countries, setCountries] =useState([]);
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=> setCountries(data))

  } , [])
  return(
    <div>
      <h3>Available Countries: {countries.length}</h3>
      {
        countries.map(country => <Country name={country.name.common} population= {country.population}></Country>)
      }
    </div>
  )
}

function Country(props){
  return(
    <div>
      <p>Name: {props.name}</p>
      <h4>Population: {props.population}</h4>
    </div>
  )

}

export default App;
