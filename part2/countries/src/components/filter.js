import React from 'react'

const Filter = ({handleSearch, search}) => {
  return (
    <div>
      find countries <input value={search} onChange={handleSearch} />
    </div>
  )
}

export default Filter