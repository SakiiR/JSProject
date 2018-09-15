import Menu from "../../components/Menu/Menu";
import { connect } from "react-redux";
import { logout } from "../../Redux/actions";
import "./ConnectedMenu.css";

const mapStateToProps = state => {
  return {
    loggedIn: state.generalReducer.loggedIn,
    loading: state.generalReducer.requestProcessing
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
)(Menu);
