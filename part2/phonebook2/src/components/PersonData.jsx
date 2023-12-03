const PersonData = (props) => {
    return(
      <div>
        {props.persons.map((person, i) => (
          <p key={i}>{person.name}: {person.number}</p>
        ))}
      </div>
    )
}

export default PersonData;