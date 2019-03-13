import { connect } from 'react-redux';
import { authLogin } from '../state/auth/actions';
import Login from '../components/login/Login';

const mapStateToProps = (state) => ({
  error: state.auth.error
})

const mapDispatchToProps = (dispatch) => ({
  onLoginClick: (data) => {
    dispatch(authLogin(data))
  }
});

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);
