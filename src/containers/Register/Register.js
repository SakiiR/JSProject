import "./Register.css";
import { connect } from "react-redux";
import { register } from "../../redux/actions";
import LRegister from "../../components/LRegister/LRegister";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: (user) => {
      dispatch(register(user));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LRegister);
