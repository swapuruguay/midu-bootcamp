import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => <div><button onClick={handleClick} >{text}</button></div>

const aleatorio = (maximo, minimo) => {
  return Math.round(Math.random() * (maximo - minimo) + minimo)
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const INITIAL = Array(anecdotes.length).fill(0)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(INITIAL)

  const handleNext = () => {
    setSelected(aleatorio(0, anecdotes.length -1))
  }

  const handleVotes = () => {
    const votos = [...votes]
    votos[selected] += 1
    setVotes(votos)
  } 

  const max = Math.max(...votes)

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{props.anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button text="next anecdote" handleClick={handleNext} />
      <Button text="vote" handleClick={handleVotes} />
      <br />
      <div>
        <h2>Anecdote with most votes</h2>
        <p>{anecdotes[votes.indexOf(max)]}</p>
        <p>has {max} votes</p>
      </div>

    </div>
  )
}



ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)