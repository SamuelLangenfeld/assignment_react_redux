import {connect} from 'react-redux'
import SortButton from '../components/SortButton'
import {sort} from '../actions'

const mapStateToProps = (state, ownProps) =>{
  return {name: `${ownProps.sortCategory} ${ownProps.sortOrder}`}
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (e) => {
      e.preventDefault();
      dispatch(sort({order:ownProps.sortOrder, category:ownProps.sortCategory}))
    }
  }
}

const SortButtonContainer = connect(
  mapStateToProps,
  // null,
  mapDispatchToProps
)(SortButton)

export default SortButtonContainer
