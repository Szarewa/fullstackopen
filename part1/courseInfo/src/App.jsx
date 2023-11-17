const Header = (props) => { 
  const { name } = props; 
  return(
    <h1>{props.course}</h1>
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
    <p>Total number of exercises: {props.sum}</p>
  )
}

const Content = (props) => {
  const { parts } = props

  const componentsHolder = () => {
    for(let comp in parts){
      if(typeof parts[comp] === 'object'){
        let individualPart = []

        for(let i in parts[comp]){
          individualPart.push(<Part key={i} name={parts[comp][i].name} exercise={parts[comp][i].exercises} />)
        }
        return individualPart
      }
    } 
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

  return (
    <div>
      <Content parts={course} />
    </div>
  )
}

export default App