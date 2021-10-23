import axios from 'axios'
import { useState, useEffect } from 'react';

const DisplayCountries = (props) => {
  console.log("filteredCountryData is", props.filteredCountryData)
  if (props.filteredCountryData.length > 10) {
    return <p>Too many matches, please specify another filter</p>
  } else if (props.filteredCountryData.length > 1 && props.filteredCountryData.length <= 10) {
    return props.filteredCountryData.map(country => <p>{country.name.common}</p>)
  } else if (props.filteredCountryData.length === 1) {
    return <DisplaySingleCountry country={props.filteredCountryData[0]} />
  } else return <p>Type to begin filtring countries</p>
}

const DisplaySingleCountry = (props) => {
  const languages = Object.values(props.country.languages)

  return (
    <div>
      <h1>{props.country.name.common}</h1>
      <p>Capital: {props.country.capital}</p>
      <p>Population: {props.country.population}</p>
      <h2>Languages</h2>
      <ul>
        {languages.map(language => <li>{language}</li>)}
      </ul>
      <img src={props.country.flags.png}></img>
    </div>
  )
}

const App = () => {
  const [countryData, setCountryData] = useState([])
  const [filteredCountryData, setFilteredCountryData] = useState([])
  const [userFilter, setUserFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountryData(response.data)
      })
  }, [])

  const handleSearchChange = (event) => {
    setUserFilter(event.target.value)
    const filteredData = countryData.filter(country => country.name.common.toLowerCase().includes(event.target.value.toLowerCase())).map(country => country)
    setFilteredCountryData(filteredData)
  }

  return (
    <div>
      Find countries: <input value={userFilter} onChange={handleSearchChange} />
      <DisplayCountries filteredCountryData={filteredCountryData} />
    </div>
  )
}

export default App;
