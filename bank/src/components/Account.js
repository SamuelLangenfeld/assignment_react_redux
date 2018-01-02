import React, {PropTypes} from 'react'

// Custom card component for each puppy's data
const Account = ({account, onSubmit}) => {
  const {accountName, amount, transactions, id} = account

  // Using Bootstrap 4 card classes
  return (
      <form onSubmit={onSubmit}>
        <input type="hidden" value={account.id} name="id" />
        <input type="submit" value={accountName} />
      </form>
  )
}

export default Account