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
    
    const NameOfPerson = persons.map(person => person.name)
    const numberOfPerson = persons.map(person => person.number)

    const nameIsTrue= NameOfPerson.includes(newName)
    const numberIsTrue = numberOfPerson.includes(newPhone)

    if(nameIsTrue && !numberIsTrue){
      const getConfirmation = 
        confirm(`${newName} is already added. Do you want to replace the old number with the new one?`)

      if(getConfirmation){
        const personUpdate = persons.find(person => person.name === newName)

        if(personUpdate){
          personUpdate.number = newPhone

          contactServ
            .updateData(personUpdate.id, personUpdate)
            .then(returnedResp => setPersons([...persons]))
            .catch('Failed to update, try later...')
        }
      }
    }
    else if(nameIsTrue){
      alert(`${newName} is already added...`)
    }
    else {

      const newDetail = {name: newName, number: newPhone, id: persons.length + 1}
      //const updatedPersonsArray = [...persons, newDetail]

      contactServ
        .createData(newDetail)
        .then(returnedResp => setPersons([...persons, newDetail]))
        .catch('Failed to Add, try later...')
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
        .then(() => {
          const updated = persons.filter(person => person.id !== id)
          setPersons(updated)
        })
        .catch('Error deleting, try later...')
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