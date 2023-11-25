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

const StatisticsLine = ({ details }) => {
  const detail = details.map((detail, i) => {
    return(
      <tr key={i}>
        <td>{detail.text}</td>
        <td>{detail.value}</td>
      </tr>
    )
  })

  return(
    <div>
      <table>
        <thead><tr>
         <th>Feedback Type</th>
         <th>Value</th>
        </tr></thead>
        <tbody>
          {detail}
        </tbody>
      </table>
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
    return 'No feedback given yet. Click a button to send...'
  }

  const details = [
    {text: 'Good', value: good},
    {text: 'Neutral', value: neutral},
    {text: 'Bad', value: bad},
    {text: 'Total', value: total},
    {text: 'Average', value: average},
    {text: 'Percentage Good', value: percentageGood}
  ]

  return(
    <div id='mainDiv'>
      <h3>Feedbacks</h3>
      <StatisticsLine details={details} />
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
    <div className='mainDiv'>
      <h2 style={{color: 'green', fontWeight: 'bolder', textAlign: 'center'}}>Unicafe Feedback Portal</h2>
      <div className="unicafe">
        <h3>Send Feedback</h3>
        <Button handleClick={handleClick} feedback={feedback} />
        <hr/>
        <Statistics feedbackValue={feedbackValue} />
        <hr/>
      </div>
    </div>
  )
}

export default App