import React from 'react'
import Part from './part'

const Content = ({parts}) => (
  <>
    {parts.map((part, index) => {
      return <Part key={index} part={part} />
    })}
</>
)

export default Content