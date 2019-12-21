import React from "react";

export default function Todos({ todos, deleteTodo }) {
	const todolist = todos.length ? (
		todos.map(todo => {
			return (
				<div className="collection-item" key={todo.id}>
					<span onClick={() => deleteTodo(todo.id)}>
						{todo.content}
					</span>
				</div>
			);
		})
	) : (
		<p className="center">There's nothing to do...</p>
	);
	return <div className="todos collection">{todolist}</div>;
}
