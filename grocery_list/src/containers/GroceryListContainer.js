import {connect} from 'react-redux'
import GroceryList from '../components/GroceryList'
//import {adoptPuppy} from '../actions'


// Add puppies prop mapped from state.puppies
const mapStateToProps = (state) => {
  
  return {
    groceries: state.groceryListReducer.items,
    filter: state.groceryListFilterReducer.filter
  }
}

// Add the adopt puppy dispatch action to props


// Generate the puppy list container which renders
// PuppyList with all the new props
const GroceryListContainer = connect(
  mapStateToProps
)(GroceryList)

export default GroceryListContainer
