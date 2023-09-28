import React from 'react';

const Country = (props) => {
    return (
        <div>
            <h2>This is Country Name: {props.name}</h2>
            <p>Population: {props.population}</p>
        </div>
    );
};

export default Country;