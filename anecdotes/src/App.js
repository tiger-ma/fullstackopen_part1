import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ]
  const [votes, setVotes] = useState(Array(8).fill(0))
  const [selected, setSelected] = useState(0)

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max)
  }
  
  const handleVotes = (sel) => {
    const copy = [...votes]
    copy[sel] += 1
    setVotes(copy)
  }
  

  const getIndexOfMostVotes = () => {
    return votes.indexOf(Math.max(...votes))
  }

  console.log(votes)

  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
      <button onClick={() => handleVotes(selected)}>vote</button>
      <button onClick={() => setSelected(getRandomInt(anecdotes.length))}>
        next anecdote
      </button>
      

      <h1>Anecdote with the most votes</h1>
      <div>{anecdotes[getIndexOfMostVotes()]}</div>
    </>
  )
}

export default App
