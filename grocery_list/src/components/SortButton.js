import React, {PropTypes} from 'react'

const SortButton = ({onClick, name})=>{
  return (<div>
    <button onClick={onClick}>{name}</button>
    </div>)
}

export default SortButton;
