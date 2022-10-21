import React from 'react';
// Components Todo Machine
import { TodoProvider } from '../TodoContext/TodoContext';
import { AppUI } from './AppUI';
import {MyFooter} from '../MyFooter/MyFooter'
//Bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
	return (
		<TodoProvider className='todo-list-app-container'>
			<h1 className='text-center main-tittle__text--font-weight'>TO DO LIST</h1>
			<AppUI />
			<MyFooter/>
		</TodoProvider>
	);
}

export default App;
