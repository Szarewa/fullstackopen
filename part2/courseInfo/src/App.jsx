// import './App.css'

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
      <p>{props.name} {props.exercise}</p>
    </>
  )
}

const Total = (props) => {
  return(
    <h4>Total number of exercises: {props.sum}</h4>
  )
}

const Content = (props) => {
  
  const { parts } = props

  //function to return the individual Parts component
  const componentsHolder = () => {
    //an empty array to store the individual parts
    let individualPart = []
    //looping through the parts to return a single part
    for(let part in parts){
      //checking to see if the return part is an object with name and exercises
      if(typeof parts[part] === 'object'){
        individualPart.push(<Part key={part} name={parts[part].name} exercise={parts[part].exercises} />)
      }
    } 
    return individualPart
  }
  
  return(
    <>
      {componentsHolder()}
    </>
  )
}

const Course = ({ course }) => {

  //sum up the total number of exercises
  const sum = course.parts.reduce((acc, currPart) => acc + currPart.exercises, 0);

  return (
    <div className="courseInfo">
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total  sum={sum} />
    </div>
  )
}

const App = (props) => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11, 
        id: 4
      }
    ]
  }

  return (
    <Course course={course} />
  )
}

export default App