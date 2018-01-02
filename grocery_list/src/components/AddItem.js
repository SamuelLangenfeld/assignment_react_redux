import React, {PropTypes} from 'react'

// Custom card component for each puppy's data
const AddItem = ({onSubmit}) => {
  
  return (
      <form onSubmit={onSubmit} >
        <input type="text" name="name" />
        <input type="text" name="description" />
        <input type="submit" />
      </form>
  )
}

export default AddItem