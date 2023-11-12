const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )
}
const Content = (props) => {
  return(
    <>
      <h4>Part: {props.part}</h4>
      <p>Number of exercises: {props.exercise}</p>
    </>
  )
}
const Total = (props) => {
  return(
    <p>Total number of exercises: {props.sum}</p>
  )
}
const App = (props) => {
  const course = 'Half Stack application development'
  const contents = [
    {part: 'Fundamentals of React', exercises:10},
    {part: 'Using props to pass data', exercises:7},
    {part: 'State of a component', exercises:14}
  ]

  return (
    <div>
      <Header course={course}/>
      <hr/>
      <Content 
        part={contents[0].part} 
        exercise={contents[0].exercises}
      />
      <hr/>
      <Content 
        part={contents[1].part} 
        exercise={contents[1].exercises}
      />
      <hr/>
      <Content 
        part={contents[2].part} 
        exercise={contents[2].exercises}
      />
      <hr/>
      <Total 
        sum={
          contents[0].exercises +
          contents[1].exercises +
          contents[2].exercises
        }
      />
    </div>
  )
}

export default App