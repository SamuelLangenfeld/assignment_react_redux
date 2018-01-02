import React, {PropTypes} from 'react'

// Custom card component for each puppy's data
const ViewAccount = ({account, singleView}) => {
  if (singleView){
    let transactions = account.transactions.map(transaction=>{
      return (<div>
          <div>{transaction.date.toString()}</div>
          <div>{transaction.amount}</div>
        </div>
        )
       } )
  
    return (
      <div>
        <h1>{account.accountName}</h1>
        <p>{account.amount}</p>
        {transactions}
      </div>
    )
  }
  return null
  
}

export default ViewAccount