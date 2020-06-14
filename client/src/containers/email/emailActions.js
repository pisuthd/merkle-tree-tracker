import { connect } from 'react-redux'
import emailActions from '../../components/email/emailActions'
import { trashEmail, assignFolder, assignLabel } from '../../redux/actions/email/emailActions';

const mapStateToProps = state => ({
    id: state.emailApp.selectedEmail
})
  
const mapDispatchToProps = dispatch => ({
    trashEmail: id => dispatch(trashEmail(id)),
    assignFolder: (id, folder) => dispatch(assignFolder(id, folder)),
    assignLabel: (id, label) => dispatch(assignLabel(id, label))
})
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(emailActions)