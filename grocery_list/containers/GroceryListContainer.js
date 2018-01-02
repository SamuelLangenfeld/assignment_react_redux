import {connect} from 'react-redux'
import GroceryList from '../components/GroceryList'
//import {adoptPuppy} from '../actions'


// Add puppies prop mapped from state.puppies
const mapStateToProps = (state) => {
  // Pass in all puppies and the value of the current filter
  // to get the correct set of puppies to pass to props
  return {
    groceries: state.items
  }
}

// Add the adopt puppy dispatch action to props


// Generate the puppy list container which renders
// PuppyList with all the new props
const GroceryListContainer = connect(
  mapStateToProps
)(GroceryList)

export default GroceryListContainer