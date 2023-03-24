import logo from './logo.svg';
import './App.css';
import LoadCountries from './components2/LoadCountries/LoadCountries';
import Footer from './components2/Footer/Footer';
import Header1 from './components2/Header1/Header1';


function App() {
  return (
    <div className="App">
      <Header1></Header1>
     <LoadCountries></LoadCountries>
     <Footer></Footer>

    </div>
  );
}


export default App;


// ----practice 2------
// import logo from './logo.svg';
// import './App.css';
// import { useEffect, useState } from 'react';
// import Countries from './components/Countries/Countries';
// import Person from './components/Person/Person';
// import Header from './components/Header/Header';

// function App() {
//   return (
//     <div className="App">
//      <Countries></Countries>
//      <Person></Person>
//      <Header></Header>
//     </div>
//   );
// }


// export default App;

// -----practic 1----
// import logo from './logo.svg';
// import './App.css';
// import { useEffect, useState } from 'react';

// function App() {
//   return (
//     <div className="App">
//      <LoadCountries></LoadCountries>
//     </div>
//   );
// }
// function LoadCountries(){
//   const [countries,setCountries] = useState([]);
//   useEffect( () =>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => setCountries(data))
//   }, [])
//   return(
//     <div>
//     <h1>Visiting every country</h1>
//     <h3>Available Countries:{countries.length}</h3>
//     {
//       countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
//     }
//     </div>
//   )
// }

// function Country(props){
//   return(
//     <div>

//       <h2>Name:{props.name}</h2>
//       <h4>Population:{props.population}</h4>
//     </div>
//   )
// }

// export default App;
