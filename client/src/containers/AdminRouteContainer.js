import { connect } from 'react-redux';
import AdminRoute from '../components/routes/AdminRoute';

function mapStateToProps(state) {
  return {
    isAdmin: state.auth.data.user
  };
}

export const AdminRouteContainer = connect(mapStateToProps)(AdminRoute);
