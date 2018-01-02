import React, {PropTypes} from 'react'
import GroceryItem from './GroceryItem'

const GroceryList = ({groceries}) => {
  // Generate the puppy card for each puppy
  console.log(groceries);
  const groceryList = groceries.map((item) => (
    <GroceryItem
      item={item}
      key={item.id}
    />
  ))

  return (
    <div>
      <h1>Our Groceries</h1>
      <div>
        {groceryList}
      </div>
    </div>
  )
}


export default GroceryList
