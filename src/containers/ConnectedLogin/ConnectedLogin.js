import "./ConnectedLogin.css";
import { connect } from "react-redux";
import Login from "../../components/Login/Login";
import { login } from "../../Redux/actions";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: (user) => {
      dispatch(login(user));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
