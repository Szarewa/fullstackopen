import { useEffect, useState } from 'react'
import Search from './components/Search'
import Forms from './components/Forms'
import PersonData from './components/PersonData'
import './App.css'
import axios from 'axios'

const App = () => {
  
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [searchParam, setSearchParam] = useState('')

  useEffect(() => {
    console.log('Effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('Promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('rendered', persons.length, 'contacts')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const person = persons.map(person => person.name)
    const nameInPerson = person.includes(newName)

    if(nameInPerson){
      alert(`${newName} is already added...`)
    }
    else {
      const updatedPersonsArray = [...persons, {name: newName, number: newPhone, id: persons.length + 1}]
      setPersons(updatedPersonsArray)
      alert('Contact added...')
    }

    setNewName('')
    setNewPhone('')
  }

  const handleInputChange = (e) => {
    const newData = e.target.value
    setNewName(newData)
  }
  const handlePhoneInput= (e) => {
    const newPhoneNumber = e.target.value
    setNewPhone(newPhoneNumber)
  }

  const handleSearch = (e) => {
    setSearchParam(e.target.value)
  }

  const filteredName = searchParam 
    ? persons.filter(person => person.name.toLowerCase().includes(searchParam.toLowerCase()) ) : persons

  return (
    <div className='phonebook'>
      <h2>Phonebook</h2>
      <Search handleSearch={handleSearch} />

      <hr/>
      <h3>Register User:</h3>
      <Forms handleSubmit={handleSubmit} handleInputChange={handleInputChange} handlePhoneInput={handlePhoneInput} />

      <h3>Numbers</h3>
      <PersonData persons={filteredName} />
    </div>
  )
}

export default App