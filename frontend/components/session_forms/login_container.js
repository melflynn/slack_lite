import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';

const mapDispatchToProps = (dispatch) => ({
  sessionAction: (user) => dispatch(login(user)),
  sessionCommand: "Log In!"
});

export default connect(null, mapDispatchToProps)(SessionForm);