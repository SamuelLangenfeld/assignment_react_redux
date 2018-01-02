import React, {PropTypes} from 'react'

// Custom card component for each puppy's data
const GroceryItem = ({item}) => {
  const {name, description, id} = item

  // Using Bootstrap 4 card classes
  return (
      <div>
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
  )
}

export default GroceryItem