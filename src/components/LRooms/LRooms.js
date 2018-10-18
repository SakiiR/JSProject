import PropTypes from "prop-types";
import React, { Component } from "react";
import "./LRooms.css";
import { List, ListItemIcon, ListItem, ListItemText } from "@material-ui/core";
import { Lock, LockOpen } from "@material-ui/icons";
import LCreateRoom from "../LCreateRoom/LCreateRoom";

class LRooms extends Component {
  internalHandleSubmit = room => {
    const { handleCreate } = this.props;

    handleCreate(room);
  };

  render() {
    const { rooms } = this.props;

    return (
      <div className="rooms">
        <h1>Rooms</h1>
        <LCreateRoom handleSubmit={this.internalHandleSubmit} />
        <div className="rooms-list">
          <List>
            {rooms != null && rooms.length > 0 ? (
              rooms.map(room => (
                <ListItem key={room._id} button>
                  <ListItemIcon className="icon">
                    {room.private ? <Lock /> : <LockOpen />}
                  </ListItemIcon>
                  <ListItemText
                    inset
                    primary={room.name}
                    secondary={room.description}
                  />
                </ListItem>
              ))
            ) : (
              <span>No Rooms</span>
            )}
          </List>
        </div>
      </div>
    );
  }
}

LRooms.propTypes = {
  rooms: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      private: PropTypes.bool.isRequired,
      description: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  handleCreate: PropTypes.func.isRequired
};

export default LRooms;
