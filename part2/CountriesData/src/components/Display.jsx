import { useState } from "react"

const Display = ({ filteredData }) => {
    const [selectedCountry, setSelectedCountry] = useState(null)

    const showDetails = (searchedCountry) => {
        setSelectedCountry(searchedCountry)
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
                    {selectedCountry && (
                      <div>
                        <h2>{selectedCountry.name.common}</h2>
                        <p><b>Capital city:</b> {selectedCountry.capital}</p>
                        <p><b>Area:</b> {selectedCountry.area}</p>
                        <p><b>Population:</b> {selectedCountry.population}</p>
                        <p><b>Languages:</b></p>
                        <ul>
                          {Object.keys(selectedCountry.languages).map(key => (
                            <li key={key}>{selectedCountry.languages[key]}</li>
                          ))}
                        </ul>
                        <img src={`${selectedCountry.flags.png}`} alt={`${selectedCountry.flag}`} width="200px" height="200px" />
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