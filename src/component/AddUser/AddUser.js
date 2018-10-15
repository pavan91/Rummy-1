import React, { Component } from 'react';

class AddUser extends Component {
	state = { name: '' }

	handleSubmit = event => {
		event.preventDefault();
		if (this.state.name === '') {
			return
		}
		this.props.submit(this.state);
		this.setState({name: ''})
	}

	render() { 
		return (
		<form onSubmit={this.handleSubmit}>
			<div className="form-input">
				<label>Name:</label>
				<input type="text" value={this.state.name} onChange={event => this.setState({name: event.target.value})}/>
			</div>
			<button>+</button>
		</form>
	);
	}
}
 
export default AddUser;