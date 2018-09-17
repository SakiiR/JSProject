import "./ConnectedRegister.css";
import { connect } from "react-redux";
import { register } from "../../Redux/actions";
import Register from "../../components/Register/Register";
import store from '../../Redux/store';
import { error_start, error_end } from '../../Redux/actions';

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
)(Register);
