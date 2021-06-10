import React from 'react'

const Filter = ({handleSearch, search}) => {
  return (
    <div>
      filter shown with <input value={search} onChange={handleSearch} />
    </div>
  )
}

export default Filter