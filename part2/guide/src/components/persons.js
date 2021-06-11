import React from 'react'
import Person from './person'

const Persons = ({persons, remove}) => {
  return (
  persons.map(p => {
    return <Person key={p.name} name={p.name} number={p.number} remove={() => remove(p.id, p.name)} />
  })
  )
}

export default Persons