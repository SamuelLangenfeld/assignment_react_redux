import {connect} from 'react-redux'
import AccountList from '../components/AccountList'
import serialize from 'form-serialize'
import {showOne} from '../actions'


const mapStateToProps = (state) => {
  
  return {
    accounts: state.bankAccountReducer.displayAccounts,
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    onSubmit: (e) => {
      e.preventDefault()
      const form = e.target
      form.id = Number(form.id)
      console.log(form.id)
      const data = serialize(form, {hash: true})

      dispatch(showOne(data))
    }
  }
}

const AccountListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountList)

export default AccountListContainer
