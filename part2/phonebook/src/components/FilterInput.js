import React from 'react'

const FilterInput = (props) => {
  return (
    <div>
      Filter shown with: <input value={props.newFilter} onChange={props.handleFilterChange} />
    </div>
  )
}

export default FilterInput