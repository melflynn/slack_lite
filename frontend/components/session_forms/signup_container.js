import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';

const mapDispatchToProps = (dispatch) => ({
  sessionAction: (user) => dispatch(signup(user)),
  sessionCommand: "Sign up!"
});

export default connect(null, mapDispatchToProps)(SessionForm);