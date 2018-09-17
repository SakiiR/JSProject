import './LMenu.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LSpinner from '../../components/LSpinner/LSpinner';
import Snackbar from '@material-ui/core/Snackbar';

class LMenu extends Component {
	render() {
		return (
			<div className="MyAppBar">
				<AppBar position="static">
					<Toolbar>
						<Typography className="MyBarInfo" variant="title" color="inherit">
							{this.props.title}
						</Typography>
						<Link to="/">
							<Button color="inherit">Dashboard</Button>
						</Link>
						{!!!this.props.loggedIn && (
							<div>
								<Link to="/login">
									<Button color="inherit">Login</Button>
								</Link>
								<Link to="/register">
									<Button color="inherit">Register</Button>
								</Link>
							</div>
						)}
						{!!this.props.loggedIn && (
							<div>
								<Link to="/rooms">
									<Button color="inherit">Rooms</Button>
								</Link>
								<Button color="inherit" onClick={this.props.handleLogout}>
									Logout
								</Button>
								<span>Logged in</span>
							</div>
						)}
						<LSpinner size={30} show={this.props.loading} />
					</Toolbar>
				</AppBar>
				<Snackbar
					anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
					open={!!this.props.error}
					message={<span id="message-id">{this.props.error}</span>}
				/>
			</div>
		);
	}
}

LMenu.propTypes = {
	title: PropTypes.string.isRequired,
	loading: PropTypes.bool.isRequired,
	loggedIn: PropTypes.bool.isRequired,
	handleLogout: PropTypes.func.isRequired,
	error: PropTypes.string
};

export default LMenu;
