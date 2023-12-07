import './personData.css'

const PersonData = ({ persons, deletePerson }) => {
  const handleDeletePerson = (id, user) => {
    deletePerson(id, user)
  }
  return(
    <div>
      {persons.map((person, i) => (
        <p key={i}>{person.name}: {person.number} 
          <span>
            <button onClick={() => handleDeletePerson(person.id, person.name)} className="deleteBtn">Delete</button>
          </span>
        </p>
      ))}
    </div>
  )
}

export default PersonData;