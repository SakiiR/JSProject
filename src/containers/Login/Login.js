import "./Login.css";
import { connect } from "react-redux";
import LLogin from "../../components/LLogin/LLogin";
import { login } from "../../redux/actions";

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
)(LLogin);
