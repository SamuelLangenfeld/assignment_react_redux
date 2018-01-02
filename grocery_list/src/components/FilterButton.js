import React, {PropTypes} from 'react'

const FilterButton = ({onClick, filter})=>{
  return (<div>
    <button onClick={onClick}>{filter}</button>
    </div>)
}

export default FilterButton;
