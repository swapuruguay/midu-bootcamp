import React from 'react'
import Header from './header'
import Content from './content'
import Total from './total'

const Curso = ({course}) => {
  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  )
}

export default Curso