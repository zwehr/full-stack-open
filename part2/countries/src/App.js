import axios from 'axios'
import { useState, useEffect } from 'react';

const DisplayCountries = (props) => {
  return (
    props.countries.map(country => <p>{country.name.common}</p>)
  )
}

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value)
    setCountries(countries.filter(country => country.name.common.toLowerCase().includes(event.target.value.toLowerCase())).map(country => country))
    console.log('countries from inside handleSearchChange', countries)
  }

  return (
    <div>
      Find countries: <input value={searchQuery} onChange={handleSearchChange} />
      <DisplayCountries countries={countries} />
    </div>
  )
}

export default App;
