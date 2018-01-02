import React, {PropTypes} from 'react'

// Custom card component for each puppy's data
const SearchInput = ({onSubmit}) => {
  //const {accountName, amount, transactions} = account

  // Using Bootstrap 4 card classes
  return (
      <form onSubmit={onSubmit}>
        <input type="text" name="account" />
        <input type="submit" />
      </form>
  )
}

export default SearchInput