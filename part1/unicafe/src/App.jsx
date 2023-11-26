import './App.css'
import { useState } from "react"

const Button = ({ handleClick, feedback }) => {
  //creating a function to return individual buttons with different text
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

//a component returning individual statistic
const StatisticsLine = ({ details }) => {
  //mapping through the details object to extract individual text and value
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


//a component to gather all individual statistics returned nt Statistics Line component
const Statistics = ({ feedbackValue }) => {
  //assigning the individual values from feedbackValue array
  const good = feedbackValue[0]
  const neutral = feedbackValue[1]
  const bad = feedbackValue[2]

  //calculating the total number of feedbacks
  const total = feedbackValue.reduce((acc, fdbck) => acc + fdbck, 0)
  const average = (total/3).toFixed(2)

  let percentageGood

  //checking to see if the number of good feedbacks is not equal to zero and total feedback is not
  //equal to zero to calculate the percetage of positive feedback
  if(good !== 0 && total !== 0){
    percentageGood = ((good/total) * 100).toFixed(2) + '%'
  }
  else {
    percentageGood = 0
  }

  //chech if there is no feedback submitted
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

  //handling the click event of individual buttons
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