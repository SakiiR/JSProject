import { connect } from "react-redux";
import LRooms from "../../components/LRooms/LRooms";
import "./Rooms.css";
import { roomCreation } from "../../redux/actions";

const mapStateToProps = state => ({
  rooms: state.roomReducer
});

const mapDispatchToProps = dispatch => ({
  handleCreate: room => {
    dispatch(roomCreation(room));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LRooms);
