// clase Componentes Todo Machine
import React from 'react';
import { TodoProvider } from '../TodoContext/TodoContext';
// import {AppUI} from './AppUI/';
import { AppUI } from './AppUI';

function App() {
	return (
		<TodoProvider>
			<AppUI />
		</TodoProvider>
	);
}

export default App;
