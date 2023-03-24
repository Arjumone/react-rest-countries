import React from 'react';
import './LoadCountry.css'

const LoadCountry = (props) => {
    console.log(props.loadCountry.area);
    const {name,area,region,population,flags} = props.loadCountry
    return (
        <div className='country'>
        <h2>LoadCountry Name:{name.common}</h2> 
        <img src={flags.png} alt="" />
        <p>Population:{population}</p>
        <p>Area:{area}</p>
        <p><small>Region:{region}</small></p>
        </div>
    );
};

export default LoadCountry;