import React from 'react';
import './Country.css'
import Footer from '../Footer/Footer';

const Country = (props) => {
    const {population, region, name, flags} = props.country;
    return (
        <div className='country bg-warning'>
            <h2>This is Country Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            

        </div>
    );
};

export default Country;