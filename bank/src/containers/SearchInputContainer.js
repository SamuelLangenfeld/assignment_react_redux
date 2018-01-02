import {connect} from 'react-redux'
import SearchInput from '../components/SearchInput'
import {search} from '../actions'
import serialize from 'form-serialize'


const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (e) => {
      e.preventDefault()
      const form = e.target
      const data = serialize(form, {hash: true})

      dispatch(search(data))
      form.reset()
    }
  }
}
const SearchInputContainer = connect(
  null,
  mapDispatchToProps
)(SearchInput)

export default SearchInputContainer
