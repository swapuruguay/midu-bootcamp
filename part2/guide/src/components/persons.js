import React from 'react'
import Person from './person'

const Persons = ({persons}) => {
  return (
  persons.map(p => {
    return <Person key={p.name} name={p.name} number={p.number} />
  })
  )
}

export default Persons