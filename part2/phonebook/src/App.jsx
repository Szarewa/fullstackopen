import { useState } from 'react'

const PersonData = (props) => {
  return(
    <div>
      {props.persons.map((person, i) => (
        <p key={i}>{person.name}: {person.number}</p>
      ))}
    </div>
  )
}

const App = () => {
  
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  //handling the form submit event
  const handleSubmit = (e) => {
    //preventing the default behavior
    e.preventDefault()
    
    //mapping through the persons array
    const person = persons.map(person => person.name)
    //checking if the newName is added already
    const nameInPerson = person.includes(newName)

    //alerting the user if name was added
    if(nameInPerson){
      alert(`${newName} is already added...`)
    }
    else {
      //adding a new object to the state with the newName and newPhoneNumber property
      const updatedPersonsArray = [...persons, {name: newName, number: newPhone}]
      setPersons(updatedPersonsArray)
      //alert(`${newName} with number: ${newPhone} added to phonebook...`)
    }

    setNewName('')
    setNewPhone('')
  }

  //getting the new name
  const handleInputChange = (e) => {
    const newData = e.target.value
    setNewName(newData)
  }
  //getting the new phone
  const handlePhoneInput= (e) => {
    const newPhoneNumber = e.target.value
    setNewPhone(newPhoneNumber)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleInputChange} />
        </div>
        <div>
          Phone: <input onChange={handlePhoneInput} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <PersonData persons={persons} />
    </div>
  )
}

export default App