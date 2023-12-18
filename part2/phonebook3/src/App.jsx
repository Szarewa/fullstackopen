import { useEffect, useState } from 'react'
import Search from './components/Search'
import Forms from './components/Forms'
import PersonData from './components/PersonData'
import Notifications from './components/Notifications'
import './App.css'
import contactServ from './services/phonebook'

const App = () => {
  
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [searchParam, setSearchParam] = useState('')
  const [msg, setMsg] = useState('')
  const [style, setStyle] = useState({})

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
            .then(returnedResp => {
              setPersons([...persons])
              setMsg(`Updated ${newName}'s phone number!`)

              const myStyle = {
                color: 'green',
                background: 'lightgrey',
                padding: '15px',
                margin: '5px auto',
                border: '2px solid green',
                borderRadius: '20px'
              }
              setStyle(myStyle)

              setTimeout(() => {
                setMsg(null)
              }, 5000)
            })
            .catch(e => {
              setMsg('Failed to update, try later...')

              const myStyle = {
                color: 'red',
                background: 'lightgrey',
                padding: '15px',
                margin: '5px auto',
                border: '2px solid red',
                borderRadius: '20px'
              }
              setStyle(myStyle)

              setTimeout(() => {
                setMsg(null)
              }, 5000)
            })
        }
      }
    }
    else if(nameIsTrue){
      setMsg(`${newName} is already added...`)

      const myStyle = {
        color: 'green',
        background: 'lightgrey',
        padding: '15px',
        margin: '5px auto',
        border: '2px solid green',
        borderRadius: '20px'
      }
      setStyle(myStyle)
    }
    else {

      const newDetail = {name: newName, number: newPhone, id: persons.length + 1}

      contactServ
        .createData(newDetail)
        .then(returnedResp => {
          setPersons([...persons, newDetail])
          setMsg(`${newName} added!`)

          const myStyle = {
            color: 'green',
            background: 'lightgrey',
            padding: '15px',
            margin: '5px auto',
            border: '2px solid green',
            borderRadius: '20px'
          }
          setStyle(myStyle)

          setTimeout(() => {
            setMsg(null)
          }, 5000)
        })
        .catch(e => {
          setMsg('Failed to Add, try later...')

          const myStyle = {
            color: 'red',
            background: 'lightgrey',
            padding: '15px',
            margin: '5px auto',
            border: '2px solid red',
            borderRadius: '20px'
          }
          setStyle(myStyle)

          setTimeout(() => {
            setMsg(null)
          }, 5000)
        })
    }

    setNewName("")
    setNewPhone("")
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
          setMsg(`${user} deleted successfully!`)

          const myStyle = {
            color: 'green',
            background: 'lightgrey',
            padding: '15px',
            margin: '5px auto',
            border: '2px solid green',
            borderRadius: '20px'
          }
          setStyle(myStyle)

          setTimeout(() => {
            setMsg(null)
          }, 5000)
        })
        .catch(e => {
          setMsg('Error deleting, try later...')

          const myStyle = {
            color: 'red',
            background: 'lightgrey',
            padding: '15px',
            margin: '5px auto',
            border: '2px solid red',
            borderRadius: '20px'
          }
          setStyle(myStyle)

          setTimeout(() => {
            setMsg(null)
          }, 5000)
        })
    }
  }

  const filteredName = searchParam 
    ? persons.filter(person => person.name.toLowerCase().includes(searchParam.toLowerCase()) ) : persons

  return (
    <div className='phonebook'>
      <h2>Phonebook</h2>
      <Notifications msg={msg} style={style} />
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