import { useState } from "react"

const Display = ({ filteredData }) => {
    const [searchedCountry, setSearchedCountry] = useState(null)

    const showDetails = (searchedCountry) => {
        setSearchedCountry(searchedCountry)
    }

    return(
        <div>
            {
              filteredData.length === 0 
              ? ('No data to display')
              : filteredData.length > 10
              ? ('Too many matches, specify another filter')
              : filteredData.length > 1 && filteredData.length <= 10
              ? (
                  <div>
                    {filteredData.map((country, i) => (
                      <p key={i}>{country.name.common}
                          &nbsp;<span>
                              <button onClick={() => showDetails(country)}>show Details</button>
                          </span>
                      </p>
                    ))}
                    <hr/>
                    {searchedCountry && (
                      <div>
                        <h2>{searchedCountry.name.common}</h2>
                        <p><b>Capital city:</b> {searchedCountry.capital}</p>
                        <p><b>Area:</b> {searchedCountry.area}</p>
                        <p><b>Population:</b> {searchedCountry.population}</p>
                        <p><b>Languages:</b></p>
                        <ul>
                          {Object.keys(searchedCountry.languages).map(key => (
                            <li key={key}>{searchedCountry.languages[key]}</li>
                          ))}
                        </ul>
                        <img src={`${searchedCountry.flags.png}`} alt={`${searchedCountry.flag}`} width="200px" height="200px" />
                      </div>
                    )}
                  </div>
                ) 
              : (filteredData.map((country, i) => (
                  <div key={i}>
                    <h2>{country.name.common}</h2>
                    <p><b>Capital city:</b>{country.capital}</p>
                    <p><b>Area:</b>{country.area}</p>
                    <p><b>Population:</b>{country.population}</p>
                    <p><b>Languages:</b></p>
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
    )
}

export default Display