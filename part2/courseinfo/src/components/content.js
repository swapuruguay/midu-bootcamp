import React from 'react'
import Part from './part'

const Content = ({course: {parts}}) => (
  <>
      {parts.map(p => <Part key={p.id} part={p} /> )}
</>
)

export default Content