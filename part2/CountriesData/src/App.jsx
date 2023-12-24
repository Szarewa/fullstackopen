import axios from 'axios'
import { useState, useEffect } from "react"
import Display from './components/Display'


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
      <Display filteredData={filteredData} />
    </div>
  )
}

export default App