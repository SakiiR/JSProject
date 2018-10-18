import PropTypes from "prop-types";
import React, { Component } from "react";
import "./LChat.css";
import TextField from "@material-ui/core/TextField";
import { Send } from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import LPasswordDialog from "../LPasswordDialog/LPasswordDialog";

export default class LChat extends Component {
  constructor() {
    super();
    this.state = { text: "", password: "", open: false };
  }

  componentDidMount() {
    const {
      location: {
        state: {
          room: { private: priv }
        }
      }
    } = this.props;
    this.setState({ open: priv });
  }

  internalHandlePasswordDialogClose = password => {
    const { listMessages } = this.props;
    const {
      location: {
        state: { room: r }
      }
    } = this.props;
    this.setState({ password, open: false });
    // TODO: subscribe to websocket
    // TODO: if the retrieve message fail redirect the user (action.onError)
    listMessages(r, password);
  };

  internalHandleTextChange = event => {
    const { value: text } = event.target;

    this.setState({ text });
  };

  internalHandleSubmit = event => {
    event.preventDefault();
    const { text, password } = this.state;
    const {
      handleSubmitMessage,
      match: {
        params: { id: roomId }
      }
    } = this.props;

    handleSubmitMessage(roomId, text, password);
    this.setState({ text: "" });
  };

  render() {
    const { messages } = this.props;
    const { open, text } = this.state;
    const {
      match: {
        params: { id: roomId }
      }
    } = this.props;
    return (
      <div>
        <div className="chat-content">
          {messages.map(
            message =>
              message.room._id === roomId && (
                <span key={message._id}>
                  {message.text} from {messages.from.username}
                </span>
              )
          )}
        </div>
        <div className="chat-bar">
          <form onSubmit={this.internalHandleSubmit}>
            <TextField
              label="Message"
              name="message"
              id="message-text"
              onChange={this.internalHandleTextChange}
              value={text}
            />
            <Button type="submit">
              <Send />
            </Button>
          </form>
        </div>
        <LPasswordDialog
          open={open}
          handleClose={this.internalHandlePasswordDialogClose}
        />
      </div>
    );
  }
}

LChat.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      from: PropTypes.shape({
        username: PropTypes.string.isRequired
      }),
      text: PropTypes.bool.isRequired,
      _id: PropTypes.string.isRequired,
      room: PropTypes.shape({
        _id: PropTypes.string.isRequired
      })
    }).isRequired
  ).isRequired,
  handleSubmitMessage: PropTypes.func.isRequired,
  listMessages: PropTypes.func.isRequired
};
