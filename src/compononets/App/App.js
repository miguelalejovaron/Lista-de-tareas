import React from 'react';
// Components Todo Machine
import { TodoProvider } from '../TodoContext/TodoContext';
import { AppUI } from './AppUI';
import {MyFooter} from '../MyFooter/MyFooter'
//Bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
	let keyForTitle = 'PrincipalTitle';
	let keyForAppUI = 'AppUiKEy';
	let keyForFooter = 'footerKey';
	return (
		<TodoProvider className='todo-list-app-container'>
			<h1 key={keyForTitle} className='text-center main-tittle__text--font-weight'>TO DO LIST</h1>
			<AppUI key={keyForAppUI} />
			<MyFooter key={keyForFooter}/>
		</TodoProvider>
	);
}

export default App;
