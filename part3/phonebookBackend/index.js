const express = require('express')
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

const persons = [
    { "id": 1, "name": "Arto Hellas", "number": "040-123456"},
    { "id": 2, "name": "Ada Lovelace", "number": "39-44-5323523"},
    { "id": 3, "name": "Dan Abramov", "number": "12-43-234345"},
    { "id": 4, "name": "Mary Poppendieck", "number": "39-23-6423122"}
]

app.get("/api/persons", (req, res) => {
    res.json(persons)
})

app.post('/api/persons', (req, res) => {

    const { name, number } = req.body

    // const name = 'Arto Hellas'
    // const number = '123'

    const id = Math.floor(Math.random() * 100 + 1)

    if(name === '' || number === ''){
        return res.status(400).json({error: 'All fields are required'})
    }

    const nameInList = persons.some(person => person.name === name)

    if(nameInList){
        return res.status(400).json({ error: 'Name is already added.' })
    }

    const newPerson  = {
        id, 
        name,
        number
    }

    persons.push(newPerson)
    res.status(200).json(newPerson)
})

app.get("/api/persons/:id", (req, res) => {
    const id = Number(req.params.id)
    const person = persons.filter(person => person.id === id)

    if(person.length > 0){
        res.json(person)
    }
    else {
        res.status(404).end()
    }
})

app.delete("/api/persons/:id", (req, res) => {
    const id = Number(req.params.id)
    const person = persons.filter(person => person.id !== id)

    if(person){
        res.status(204).send(`The person with the id ${id} is removed from the list`)
    }
})

app.get("/info", (req, res) => {
    const numberOfPeople = persons.length
    const timeOfRequest = new Date().toString()

    res.send(
        `<p>Phonebook has info for ${numberOfPeople} people</p>
        <p>The request was made: ${timeOfRequest}</p>`
    )
})

const port = 3001
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})