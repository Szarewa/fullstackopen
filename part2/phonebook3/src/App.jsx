import { useEffect, useState } from 'react'
import Search from './components/Search'
import Forms from './components/Forms'
import PersonData from './components/PersonData'
import './App.css'
import contactServ from './services/phonebook'

const App = () => {
  
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [searchParam, setSearchParam] = useState('')

  useEffect(() => {
    contactServ
      .getData()
      .then(returnedResp => {
        setPersons(returnedResp)
      })
  }, [])

  const handleInputChange = (e) => {
    const newData = e.target.value
    setNewName(newData)
  }

  const handlePhoneInput= (e) => {
    const newPhoneNumber = e.target.value
    setNewPhone(newPhoneNumber)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const person = persons.map(person => person.name)

    const nameInPerson = person.includes(newName)
    const numberInPerson = person.includes(newPhone)

    if(nameInPerson){
      alert(`${newName} is already added...`)
    }
    else {

      const newDetail = {name: newName, number: newPhone, id: persons.length + 1}
      const updatedPersonsArray = [...persons, newDetail]
      const ua = {...persons, newDetail}

      console.log(updatedPersonsArray)
      console.log(ua)

      contactServ
        .createData(ua)
        .then(returnedResp => setPersons(returnedResp))
        .catch(e => console.log('Error...' + e))
    }

    setNewName(' ')
    setNewPhone(' ')
  }

  const handleSearch = (e) => {
    setSearchParam(e.target.value)
  }

  const deletePerson = (id, user) => {
    const confirmBox = confirm('Delete ' + user + '?')
    if(confirmBox){
      contactServ
        .deleteData(id)
        .then(returnedResp => setPersons(returnedResp))
        .catch(e => console.log('Error...' + e))
    }
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
      <PersonData persons={filteredName} deletePerson={deletePerson} />
    </div>
  )
}

export default App