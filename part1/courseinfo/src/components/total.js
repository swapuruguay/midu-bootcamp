import React from 'react'

const Total = ({parts}) => {
  let tot = 0
  parts.forEach(p => {
    tot += p.exercises
  })
  return <p>Number of exercises {tot}</p>
}
  


export default Total