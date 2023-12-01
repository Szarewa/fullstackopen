import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]) 
  const [newName, setNewName] = useState('')

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
      //adding a new object to the state with the newName property
      const updatedPersonsArray = [...persons, {name: newName}]
      setPersons(updatedPersonsArray)
      //console.log(updatedPersonsArray)
    }

    setNewName('')
  }

  const handleInputChange = (e) => {
    const newData = e.target.value
    setNewName(newData)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleInputChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      ...
    </div>
  )
}

export default App