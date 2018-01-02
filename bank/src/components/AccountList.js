import React, {PropTypes} from 'react'
import Account from './Account'

const AccountList = ({accounts, filter, onSubmit}) => {

  const accountList = accounts.filter((account) => {

    switch(filter){
      case 'SHOW_ALL':
        return  true
      case 'PURCHASED':
        return true
      default:
        return true
    }
  }
  ).map(account=><Account account={account} key={account.id} onSubmit={onSubmit}/>)
    
  return (
    <div>
      <h1>Accounts</h1>
      <div>
        {accountList}
      </div>
    </div>
  )
}


export default AccountList