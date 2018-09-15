import Menu from "../../components/Menu/Menu";
import { connect } from "react-redux";
import "./ConnectedMenu.css";

const mapStateToProps = state => {
  return {
    loggedIn: state.generalReducer.loggedIn,
    loading: state.generalReducer.requestProcessing
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
