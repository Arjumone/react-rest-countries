import React, { useEffect, useState } from 'react';
import LoadCountry from '../LoadCountry/LoadCountry';
import './LoadCountries.css'
const LoadCountries = () => {
    const [loadCountries,setLoadCountries] = useState([]);
    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data=> setLoadCountries(data))
    }, [])
    return (
        <div>
          <h2>All Countries Loading:{loadCountries.length}</h2>  
       <div className='countries-container'>
       {
            loadCountries.map(loadCountry => <LoadCountry
                loadCountry = {loadCountry}
                key={loadCountry.cca3}></LoadCountry>)
          }
       </div>
        </div>
    );
};

export default LoadCountries;