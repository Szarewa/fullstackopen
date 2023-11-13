const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  const { parts } = props

  const partRendering = () => {
    const individualPart = []
    for(let i in parts){
      const part = parts[i]
      individualPart.push(
        <Part key={part.id}part={part.part} exercise={part.exercises} />
      )
    }
    return individualPart
  }
  
  return(
    <>
      {partRendering()}
    </>
  )
}
const Part = (props) => {
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
    {id: 1, part: 'Fundamentals of React', exercises:10},
    {id: 2, part: 'Using props to pass data', exercises:7},
    {id: 3, part: 'State of a component', exercises:14}
  ]

  return (
    <div>
      <Header course={course}/>
      <hr/>
      <Content 
        parts={contents} 
        //exercise={contents[0].exercises}
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