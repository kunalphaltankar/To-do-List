import React from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";

class App extends React.Component {
	state = {
		todos: [
			{
				id: 1,
				content: "Practice React."
			},
			{
				id: 2,
				content: "Have Fun Programming."
			}
		]
	};

	deleteTodo = id => {
		let todos = this.state.todos.filter(todo => {
			return todo.id !== id;
		});
		this.setState({
			todos: todos
		});
	};

	addTodo = content => {
		const todo = {
			id: Math.random(),
			content: content
		};
		const todos = [...this.state.todos, todo];
		this.setState({
			todos
		});
	};
	render() {
		return (
			<div className="todo-app container">
				<h1>To Do List</h1>
				<Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
				<AddTodo addTodo={this.addTodo} />
			</div>
		);
	}
}

export default App;
