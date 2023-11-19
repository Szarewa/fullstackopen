import './App.css'
import { useState } from "react"

const Button = ({ handleClick, feedback }) => {
  //const [handleClick, feedback] = props
  return(
    <button onClick={handleClick}>{feedback}</button>
  )
}

const StatisticLine = () => {
  return (
    <div></div>
  )
}

const Statistics = ({ feedbacks }) =>{
  const good = feedbacks[0]
  const neutral = feedbacks[1]
  const bad = feedbacks[2]

  const total = feedbacks.reduce((acc, fdbck) => acc + fdbck, 0)
  const average = (total/3).toFixed(2)
  let percentageGood

  if(good !== 0 && total !== 0){
    percentageGood = ((good/total) * 100).toFixed(2) + '%'
  }
  else {
    percentageGood = 0
  }

  if(total === 0){
    return 'No feedback given yet...'
  }
  
  return(
    <div>
      <h3>Number of feedbacks</h3>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <hr/>
      <h3>Feedback statistics</h3>
      <p>Total feedback: {total}</p>
      <p>Average feedback: {average}</p>
      <p>Positive feedback: {percentageGood}</p>
    </div>
  )
}

const App = (props) => {
  const [good, setGood] = useState(0.)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const feedbacks = [good, neutral, bad]

  return (
    <div className="unicafe">
      <h3>Give your feedback</h3>
      <Button handleClick={() => setGood(good + 1)} feedback='Good' />
      <Button handleClick={() =>setNeutral(neutral + 1)} feedback='Neutral' />
      <Button handleClick={() =>setBad(bad + 1)} feedback='Bad' />
      <hr/>
      <Statistics feedbacks={feedbacks} />
    </div>
  )
}

export default App