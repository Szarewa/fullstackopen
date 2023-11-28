import './App.css'
import { useState } from "react"

const App = (props) => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  //create an array to hold the votes and fill it with zeros equal to the length of the anecdotes array
  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0))
  
  //randomly select an anecdote
  const handleClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  //handle the voting event
  const handleClickVoting = () => {

  //make a copy of the vote array
   const newVote = [...vote]
   //increment the selected index's vote by one in the copied array
    newVote[selected] +=1
    //set the vote array to the newVote
    setVote(newVote)
  }

  //get the highest number of votes in the vote array
  const highestVote = Math.max(...vote)

  //retur the index of the highest votes
  const index = vote.findIndex(value => value === highestVote)

  return (
    <div>
      <h2>ANECDOTES</h2>
      <div className='anecdotes'>
        <h3>{anecdotes[selected]}</h3>
        <p>Number of Votes: {vote[selected]}</p>
        <hr/>
        <button onClick={handleClickVoting}>Vote</button>
        <button onClick={handleClick}>Next Anecdote</button>
        <p>Highest Votes goes to:</p>
        <h3>{anecdotes[index]}</h3>
        <p>With {highestVote} votes.</p>
      </div>
    </div>
  )
}

export default App