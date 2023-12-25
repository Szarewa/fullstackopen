const Display = ({ filteredData }) => {
    const showDetails = (searchedCountry) => {
        const countryData = filteredData.find(country => country === searchedCountry)

        if(countryData){
            //alert(`I am ${countryData.name.common} with population of ${countryData.population}`)
            return(
                <div>
                    <h2>{countryData.name.common}</h2>
                    <p><b>Capital city:</b> {countryData.capital}</p>
                    <p><b>Area:</b> {countryData.area}</p>
                    <p><b>Population:</b> {countryData.population.toLocaleString()}</p>
                    <p><b>Languages:</b></p>
                        <ul>
                          {Object.keys(countryData.languages).map(key => (
                            <li key={key}>{countryData.languages[key]}</li>
                          ))}
                        </ul>
                        <img src={`${countryData.flags.png}`} alt={`${countryData.flag}`} width="200px" height="200px" />
                </div>
            )
        }
        return null
    }

    return(
        <div>
            {
  
                filteredData.length === 0 
                ? ('No data to display')
                : filteredData.length > 10
                ? ('Too many matches, specify another filter')
                : filteredData.length > 1 && filteredData.length <= 10
                ? (filteredData.map((country, i) => (
                    <p key={i}>{country.name.common}
                        &nbsp;<span>
                            <button onClick={() => showDetails(country)}>show Details</button>
                        </span>
                    </p>
                  ))) 
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