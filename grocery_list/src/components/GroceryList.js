import React, {PropTypes} from 'react'
import GroceryItem from './GroceryItem'

const GroceryList = ({groceries, filter}) => {
  // Generate the puppy card for each puppy
  console.log(groceries);
  const groceryList = groceries.filter((item) => {

    switch(filter){
      case 'SHOW_ALL':
        return  true
      case 'PURCHASED':
        return item.purchased
      default:
        return true
    }
  }
  ).map(item=><GroceryItem item={item} key={item.id} />)
    
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
