import {connect} from 'react-redux'
import FilterButton from '../components/FilterButton'
import {setFilter} from '../actions'

const mapStateToProps = (state) =>{
  let data = state.groceryListFilterReducer.filter=== "SHOW_ALL"? "PURCHASED" : "SHOW_ALL";
  return {filter: data}
}
const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (e) => {
      console.log("Props.filter")
      console.log(this.filter)
      dispatch(setFilter(e.target.filter))
    }
  }
}

const FilterButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterButton)

export default FilterButtonContainer