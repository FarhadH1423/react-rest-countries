import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'
import Footer from '../Footer/Footer';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    // const [countries, setCountries] = useState([])

    // useEffect(()=>{
    //     fetch
    //     .the(res => res.json())
    //     .then(data => setCountries(data))
    // },[])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])
    return (
        <div >
            <h1>Hello From World! {countries.length}</h1>

            <div className='countries-container'>
                {

                    countries.map(country => <Country
                        country={country}
                        key={country.cca3}>

                    </Country>)
                }
                
            </div>
            
        </div>
    );
};

export default Countries;