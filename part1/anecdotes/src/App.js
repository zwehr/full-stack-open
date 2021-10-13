import React, { useState } from 'react'

const MostVotes = (props) => {
  const maxVoteNum = Math.max(...props.voteCount)
  const indexOfMax = props.voteCount.indexOf(maxVoteNum)
  console.log("maxvotenum", maxVoteNum)
  console.log("indexofmax", indexOfMax)

  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <p>{props.anecdotes[indexOfMax]}</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [voteCount, setVoteCount] = useState(Array(7).fill(0))
  const [selected, setSelected] = useState(0)

  const handleVote = () => {
    const newVoteCount = [...voteCount];
    newVoteCount[selected]++;
    setVoteCount(newVoteCount)
  }

  const handleNew = () => {
    const newRandomNum = Math.floor(Math.random() * 7)
    setSelected(newRandomNum)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {voteCount[selected]} votes</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleNew}>next anecdote</button>
      <MostVotes voteCount={voteCount} anecdotes={anecdotes} />
    </div>
  )
}

export default App