const Header = ({ name }) => {
  return <h2 style={{fontWeight: 'bold'}}>{name}</h2>
}
const Part = ({ part }) => {
  return <p>{part.name}: {part.exercises}</p>
}
const Total = ({ total }) => {
  const sum = total.reduce((acc, currVal) => acc + currVal.exercises, 0)
  return <p>Total Exercises: {sum}</p>
}

const Course = ({ courses }) => {
  return (
    <div>
    {courses.map((course, i) => (
      <div key={i}>
        <Header name={course.name} />
        {course.parts.map((part, i) => (
          <div key={i}>
            <Part part={part} />
          </div>
        ))}
        <Total total={course.parts}/>
      </div>
    ))}
    </div>
  )
}

export default Course