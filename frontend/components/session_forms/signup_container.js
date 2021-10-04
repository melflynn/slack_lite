import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  errors: state.errors.session
})

const mapDispatchToProps = (dispatch) => ({
  sessionAction: (user) => dispatch(signup(user)),
  sessionCommand: "SIGN UP"
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);