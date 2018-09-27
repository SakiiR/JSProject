import { connect } from "react-redux";
import LRooms from "../../components/LRooms/LRooms";
import "./Rooms.css";

const mapStateToProps = state => ({
  rooms: [
    {
      name: "Room 1",
      _id: "Room id 1",
      description: "Description Room 1",
      private: false
    },
    {
      name: "Room 2",
      _id: "Room id 2",
      description: "Description Room 2",
      private: false
    },
    {
      name: "Room 3",
      _id: "Room id 3",
      description: "Description Room 3",
      private: true
    },
    {
      name: "Room 4",
      _id: "Room id 4",
      description: "Description Room 4",
      private: false
    },
    {
      name: "Room 5",
      _id: "Room id 5",
      description: "Description Room 5",
      private: true
    }
  ]
});

const mapDispatchToProps = dispatch => ({
  handleCreate: room => {
    console.log("Handle room creation: ", room);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LRooms);
