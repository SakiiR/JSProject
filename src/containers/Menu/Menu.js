import LMenu from "../../components/LMenu/LMenu";
import { connect } from "react-redux";
import { logout } from "../../redux/actions";
import "./Menu.css";

const mapStateToProps = state => {
  return {
    loggedIn: state.generalReducer.loggedIn,
    loading: state.generalReducer.requestProcessing,
    error: state.generalReducer.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleLogout: (user) => dispatch(logout(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LMenu);
