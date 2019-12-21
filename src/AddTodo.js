import React from "react";

export default class AddTodo extends React.Component {
	state = {
		content: ""
	};
	handleChange = e => {
		this.setState({
			content: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.addTodo(this.state.content);
		this.setState({
			content: ""
		});
	};
	render() {
		return (
			<div className="AddTodo">
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="Add things to do here">
						Add things to do here
					</label>
					<input
						type="text"
						onChange={this.handleChange}
						value={this.state.content}
					/>
					<button>Submit</button>
				</form>
			</div>
		);
	}
}
