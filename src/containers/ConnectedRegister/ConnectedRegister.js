import "./ConnectedRegister.css";
import { connect } from "react-redux";
import { register } from "../../Redux/actions";
import Register from "../../components/Register/Register";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: (user) => {
      console.log("Dispatch register");
      dispatch(register(user));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
