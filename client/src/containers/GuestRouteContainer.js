import { connect } from 'react-redux';
import GuestRoute from '../components/routes/GuestRoute';

function mapStateToProps(state) {
  return {
    isAdmin: state.auth.data.user
  };
}

export const GuestRouteContainer = connect(mapStateToProps)(GuestRoute);
