import React from 'react'
const Notification = ({ message, estilo }) => {
  if (message === null) {
    return null
  }

  return (
    <div className={estilo}>
      {message}
    </div>
  )
}

export default Notification