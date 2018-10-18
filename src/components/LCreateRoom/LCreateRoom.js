import PropTypes from "prop-types";
import React, { Component } from "react";
import "./LCreateRoom.css";
import TextField from "@material-ui/core/TextField";
import { Button, Checkbox, Tooltip } from "@material-ui/core";

class LCreateRoom extends Component {
  state = {
    roomName: "",
    roomPrivate: false,
    roomPassword: ""
  };

  internalHandleSubmit = event => {
    event.preventDefault();
    const { handleSubmit } = this.props;

    handleSubmit({ ...this.state });
    this.setState({
      roomName: "",
      roomPrivate: false,
      roomPassword: ""
    });
  };

  handleChange = (name, chk = false) => event => {
    const { value } = event.target;
    const { checked } = event.target;
    this.setState({
      [name]: chk ? checked : value
    });
  };

  render() {
    const { roomName, roomPrivate, roomPassword } = this.state;

    return (
      <div className="rooms">
        <form onSubmit={this.internalHandleSubmit}>
          <TextField
            label="Create room"
            name="create-room"
            value={roomName}
            onChange={this.handleChange("roomName")}
            id="create-room"
          />
          <Tooltip title="Change privateness">
            <Checkbox
              checked={roomPrivate}
              onChange={this.handleChange("roomPrivate", true)}
            />
          </Tooltip>
          <div className="private">
            {!!roomPrivate && (
              <TextField
                label="Room Password"
                type="password"
                name="room-password"
                value={roomPassword}
                onChange={this.handleChange("roomPassword")}
                id="room-password"
              />
            )}
          </div>
          <Button color="primary" type="submit">
            Create
          </Button>
        </form>
      </div>
    );
  }
}

LCreateRoom.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default LCreateRoom;
