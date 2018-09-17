import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './LRegister.css';

class LRegister extends Component {
	state = {
		username: '',
		password: '',
		passwordr: '',
		error: false
	};

	handleChange = (name) => (event) => {
		const { value } = event.target;
		this.setState(
			(pState, props) => ({
				...pState.user,
				[name]: value
			}),
			() => {
				// Called at the end of setState so the value of inputs have been updated
				this.setState({ error: this.state.password !== this.state.passwordr });
			}
		);
	};

	handleSubmit = (event) => {
		event.preventDefault();
		if (this.state.password === this.state.passwordr)
			this.props.handleSubmit({
				username: this.state.username,
				password: this.state.password
			});
	};

	render() {
		return (
			<div className="LRegister">
				<form className="container" noValidate autoComplete="off" onSubmit={this.handleSubmit}>
					<h1>Please Register</h1>
					<TextField
						id="username"
						label="Username"
						className="field username"
						onChange={this.handleChange('username')}
						margin="normal"
					/>
					<TextField
						id="password"
						label="Password"
						type="password"
						className="field password"
						onChange={this.handleChange('password')}
						margin="normal"
					/>
					<TextField
						id="password2"
						error={this.state.error}
						label="Repeat Password"
						type="password"
						className="field password"
						onChange={this.handleChange('passwordr')}
						margin="normal"
					/>
					<Button className="submit" variant="contained" color="secondary" type="submit">
						Submit
					</Button>
				</form>
			</div>
		);
	}
}

LRegister.propTypes = {
	handleSubmit: PropTypes.func.isRequired
};

export default LRegister;
