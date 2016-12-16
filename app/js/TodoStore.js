import { autorun, observable, computed } from 'mobx';

class Todo {
	@observable value;
	@observable id;
	@observable complete;
	constructor(value) {
		this.value = value;
		this.id = Date.now();
		this.complete = false;
	}
}


class TodoStore {
	@observable todos = [];
	@observable filter = '';
	@computed get filteredTodos() {
		var matchersFilter = new RegExp(this.filter, 'i');
		return this.todos.filter(todo => !this.filter || matchersFilter.test(todo.value) );
	}

	createTodo(value) {
		this.todos.push(new Todo(value));
	}
	clearCompleted() {
		let incompleteTodos = this.todos.filter( todo => !todo.complete);
		// this.todos = incompleteTodos;
		// mobx的observable中的对象，数组都不是js原生的，只是含有原生的方法，然后它包含mobx扩展的方法
		this.todos.replace(incompleteTodos);
	}

}

var store = window.store = new TodoStore();

export default store;

// autorun(() => {
// 		console.log('the autorun')
// 		console.log(store.todos[0]);
// 		console.log(store.filter);
// })