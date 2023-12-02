import { useState } from 'react'
import Search from './components/Search'
import Forms from './components/Forms'
import PersonData from './components/PersonData'
import './App.css'

const App = () => {
  
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [searchParam, setSearchParam] = useState('')

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