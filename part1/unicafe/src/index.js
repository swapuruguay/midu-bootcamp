import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = () => {
  return <h2>give feedback</h2>
}

const Statictis = ({good, neutral, bad, total, average, positive}) => {
  const totalin = good + neutral + bad
  if(!totalin) {
    return <p>No feedback given</p>
  }
  return (
  <>
    <h2>Statistics</h2>
    <table>
      <tbody>
        <Statics text="good" value={good} />
        <Statics text="bad" value={bad} />
        <Statics text="neutral" value={neutral} />
        <Statics text="all" value={total} />
        <Statics text="average" value={average} />
        <Statics text="positive" value={positive} />
        
      </tbody>
    </table>
  </>
  )
}

const Statics = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>
const Button = ({texto, handleClick}) => {
  return <button onClick={handleClick}>{texto}</button>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
 

  const handleGood = () =>{
    setGood(good + 1)
  }
  const handleNeutral = () =>{
    setNeutral(neutral + 1)
  }
  const handleBad = () =>{
    setBad(bad + 1)
  }

  const total = good + neutral + bad
  const average = (good - bad ) / total
  const positive = `${good / total * 100} %`

  return (
    <div>
      <Header />
      <Button handleClick={handleGood} texto="good" />
      <Button handleClick={handleNeutral} texto="neutral" />
      <Button handleClick={handleBad} texto="bad" />
      <Statictis good={good} neutral ={neutral} bad={bad} total={total} average={average} positive={positive} />
      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)