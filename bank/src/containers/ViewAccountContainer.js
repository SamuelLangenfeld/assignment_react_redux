import {connect} from 'react-redux'
import ViewAccount from '../components/ViewAccount'


const mapStateToProps = (state) => {
  
  return {
    singleView: state.bankAccountReducer.singleView,
    account: state.bankAccountReducer.displayAccounts[0]
  }
}

const ViewAccountCountainer = connect(
  mapStateToProps,
)(ViewAccount)

export default ViewAccountCountainer
