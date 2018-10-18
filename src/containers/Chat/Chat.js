import { connect } from "react-redux";
import LChat from "../../components/LChat/LChat";
import { roomListMessages } from "../../redux/actions";
import "./Chat.css";

const mapStateToProps = state => ({
  messages: []
});

const mapDispatchToProps = dispatch => ({
  handleSubmitMessage: (roomId, text, password) => {},
  listMessages: (room, password = null) => {
    dispatch(roomListMessages(room, password));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LChat);
