import { connect } from 'react-redux';
import Signup from './signup';
import { signup } from '../../actions/session_actions';

const mapDispatchToProps = (dispatch) => ({
  signup: (user) => dispatch(signup(user))
});

export default connect(null, mapDispatchToProps)(Signup);