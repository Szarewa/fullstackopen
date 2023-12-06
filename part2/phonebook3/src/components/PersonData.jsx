import './personData.css'

const PersonData = ({ persons, deletePerson }) => {
    return(
      <div>
        {persons.map((person, i) => (
          <p key={i}>{person.name}: {person.number} 
            <span>
              <button onClick={deletePerson} className="deleteBtn">Delete</button>
            </span>
          </p>
        ))}
      </div>
    )
}

export default PersonData;