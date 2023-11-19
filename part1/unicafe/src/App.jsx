//import './App.css'
import { useState } from "react"

const Button = ({ handleClick, feedback }) => {
  //const [handleClick, feedback] = props
  return(
    <button onClick={handleClick}>{feedback}</button>
  )
}

const App = (props) => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Button handleClick={() => setGood(good + 1)} feedback='Good' />
      <Button handleClick={() =>setNeutral(neutral + 1)} feedback='Neutral' />
      <Button handleClick={() =>setBad(bad + 1)} feedback='Bad' />
      <hr/>

      <h3>Feedback</h3>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </div>
  )
}

export default App