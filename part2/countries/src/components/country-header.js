import React from 'react'

const CountryHeader = ({country: {name, capital, population}}) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>capital {capital}</p>
      <p>population {population}</p>
    </div>
  )
}

export default CountryHeader