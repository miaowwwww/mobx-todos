import React from 'react';
import { observer } from 'mobx-react';

@observer
export default class TodoList extends React.Component {
	constructor(props) {
		super(props);
	}

	filterTodos = (e) => {
		this.props.store.filter = e.target.value;
	}
	createNewTodo = (e) => {
		if(e.which === 13 && e.target.value) {
			this.props.store.createTodo(e.target.value);
			e.target.value = '';
		}	
	}
	toggleComplete(todo){
		todo.complete = !todo.complete;
	}
	clearCompleted = (e) => {
		e.stopPropagation();
		this.props.store.clearCompleted();
	}

	render() {
		const { filter, todos, filteredTodos } = this.props.store;
		const todoLis = filteredTodos.map( todo => (
			<li key={todo.id}>
				<input type="checkbox" value={todo.complete}  checked={todo.complete} onChange={this.toggleComplete.bind(this,todo)}/>
				{todo.value}
			</li>
			));

		return (
			<div>
				<h1>todos</h1>
				new: <input type="text" onKeyPress={this.createNewTodo}/>
				filter:<input type="text" 
					value={filter}
					onChange={this.filterTodos} />
				<ul>{todoLis}</ul>
				<button onClick={this.clearCompleted}>clear completed</button>
			</div>
		)
	}
}