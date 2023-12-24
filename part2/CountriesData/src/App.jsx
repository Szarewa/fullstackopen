import axios from 'axios'
import { useState, useEffect } from "react"


const App = () => {

  const [searchTerm, setSearchTerm] = useState(null)
  const [returnedData, setReturnedData] = useState([])

  const onSearchChange = (e) => {
    let searchValue = e.target.value
    setSearchTerm(searchValue)
  }

  useEffect(() => {
    if(searchTerm !== null){
      //console.log(searchTerm)
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
        .then(resp => {
          setReturnedData(resp.data)
        })
        .catch((e) => {
          console.log('Error sending request, please try again...', e)
        })
    }
  },[searchTerm])

  const filteredData = searchTerm 
  ? returnedData.filter(country => country.name.common.toLowerCase().includes(searchTerm.toLowerCase()))
  : returnedData

  return (
    <div>
      <h2>Countries Data Search</h2>
      <hr/>
      <input type='search' placeholder='Type to search...' onChange={onSearchChange}/>
      <hr/>
      <div id="displayBox">
        {
          filteredData.length === 0 
          ? ('No data to display')
          : filteredData.length > 10
          ? ('Too many matches, specify another filter')
          : filteredData.length > 1 && filteredData.length <= 10
          ? (filteredData.map((country, i) => (
              <p key={i}>{country.name.common}</p>
            ))) 
          : (filteredData.map((country, i) => (
              <div key={i}>
                <h2>{country.name.common}</h2>
                <p>Capital city: {country.capital}</p>
                <p>Area: {country.area}</p>
                <p>Population: {country.population}</p>
                <p>Languages:</p>
                  <ul>
                    {Object.keys(country.languages).map(key => (
                      <li key={key}>{country.languages[key]}</li>
                    ))}
                  </ul>
              <img src={`${country.flags.png}`} alt={`${country.flag}`} width="200px" height="200px" />
              </div>
            ))) 
        } 
      </div>
    </div>
  )
}

export default App