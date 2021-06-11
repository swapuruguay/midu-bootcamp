import React from 'react'

const Country = ({country: {name}, show}) => {
  return (
    <div>{name} <button onClick={show} value={name}>show</button> </div>
  )
}

export default Country