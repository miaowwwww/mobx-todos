import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './js/TodoList';
import store from './js/TodoStore';

const app = document.getElementById('root');

ReactDOM.render(<TodoList store={store} />, app);