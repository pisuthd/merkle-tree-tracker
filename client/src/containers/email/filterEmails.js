import { connect } from 'react-redux'
import { setVisibilityFilter } from '../../redux/actions/email/emailActions'
import Link from '../../components/email/filterLinks.js'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.emailApp.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)