import './App.css'

const Header = (props) => { 
  //props destructurinf
  const { name } = props; 
  return(
    <h1 style={{color: 'green', borderBottom: '1px solid green'}}>{props.name}</h1>
  )
}
const Part = (props) => {
  return(
    <>
      <h4>Part: {props.name}</h4>
      <p>Number of exercises: {props.exercise}</p>
    </>
  )
}

const Total = (props) => {
  return(
    <h4>Total number of exercises: {props.sum}</h4>
  )
}

const Content = ({ parts }) => {

  //function to return the individual Parts component
  const componentsHolder = () => {
    //an empty array to store the individual parts
    let individualPart = []
    //looping through the parts to return a single part
    for(let part in parts){
      individualPart.push(<Part key={part} name={parts[part].name} exercise={parts[part].exercises} />)
    } 
    return individualPart
  }
  
  return(
    <>
      {componentsHolder()}
    </>
  )
}

const App = (props) => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  //sum up the total number of exercises
  const sum = course.parts.reduce((acc, currPart) => acc + currPart.exercises, 0);

  return (
    <div className="courseInfo">
      <Header name={course.name} />
      <hr/>
      <Content parts={course.parts} />
      <hr/>
      <Total sum={sum} />
    </div>
  )
}

export default App