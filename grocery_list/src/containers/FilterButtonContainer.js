import {connect} from 'react-redux'
import FilterButton from '../components/FilterButton'
import {setFilter} from '../actions'

const mapStateToProps = (state, ownProps) =>{
  // console.log("ownProps");
  // console.log(ownProps);
  // let data = state.groceryListFilterReducer.filter=== "SHOW_ALL"? "PURCHASED" : "SHOW_ALL";
  // ownProps.filter = data
  return {filter: ownProps.filter}
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (e) => {
      e.preventDefault();
      console.log(ownProps);
      dispatch(setFilter(ownProps.filter))
    }
  }
}

const FilterButtonContainer = connect(
  mapStateToProps,
  // null,
  mapDispatchToProps
)(FilterButton)

export default FilterButtonContainer
