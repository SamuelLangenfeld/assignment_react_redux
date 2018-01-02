import React, {PropTypes} from 'react'

const FilterButton = ({onClick, filter})=>{
  return (<button onClick={onClick} filter={filter}>Filter</button>)
}

export default FilterButton;