import './App.css'
import { useState } from "react"

const Button = ({ handleClick, feedback }) => {
  //console.log(feedback)
  const myButton = () => feedback.map((feedback, i) => {
    return(
      <button key={i} onClick={handleClick} >{feedback.text}</button>
    )
  })

  return(
    <div>
      {myButton()}
    </div>
  )
}

const StatisticsLine = ({ text, value }) => {
  return(
    <div>
      <p>{text}: {value}</p>
    </div>
  )
}

const Statistics = ({ feedbackValue }) => {
  const good = feedbackValue[0]
  const neutral = feedbackValue[1]
  const bad = feedbackValue[2]

  const total = feedbackValue.reduce((acc, fdbck) => acc + fdbck, 0)
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
      <h3>Feedbacks</h3>
      <StatisticsLine text='Good' value={good} />
      <StatisticsLine text='Neutral' value={neutral} />
      <StatisticsLine text='Bad' value={bad} />
      <h3>Feedback Statistics</h3>
      <StatisticsLine text='Total' value={total} />
      <StatisticsLine text='Average' value={average} />
      <StatisticsLine text='Percentage Good' value={percentageGood} />
    </div>
  )
}

const App = (props) => {
  const [good, setGood] = useState(0.)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const feedback = [
    {text: 'Good', value: good},
    {text: 'Neutral', value: neutral},
    {text: 'Bad', value: bad}
  ]

  const feedbackValue = [good, neutral, bad]

const handleClick = () => {
  const setValue = () => {
    if (event.target.textContent === 'Good') {
      setGood(good => good +1)
    }
    

    if (event.target.textContent === 'Neutral') {
      setNeutral(neutral => neutral +1)
    }
    

    if (event.target.textContent === 'Bad') {
      setBad(bad => bad +1)
    }
    
  }
  return setValue()
}

  return (
    <div className="unicafe">
      <Button handleClick={handleClick} feedback={feedback} />
      <hr/>
      <Statistics feedbackValue={feedbackValue} />
      <hr/>
    </div>
  )
}

export default App