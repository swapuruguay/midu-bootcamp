import React from 'react'

const Total = ({ course: {parts} }) => {
  const sum = parts.reduce((s, p) => s + p.exercises, 0)
  return(
    <p><strong>total of {sum} exercises</strong></p>
  ) 
}
  
export default Total