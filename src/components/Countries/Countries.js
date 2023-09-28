import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    // const [countries, setCountries] = useState([])

    // useEffect(()=>{
    //     fetch
    //     .the(res => res.json())
    //     .then(data => setCountries(data))
    // },[])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    },[])
    return (
        <div>
            <h1>Hello From Countries! {countries.length}</h1>
            {

                countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
            }
        </div>
    );
};

export default Countries;