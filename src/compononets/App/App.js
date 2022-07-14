// clase Componentes Todo Machine
import React from 'react';
import { TodoProvider } from '../TodoContext/TodoContext';
import { AppUI } from './AppUI';
//Bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
	return (
		<TodoProvider>
			<AppUI />
		</TodoProvider>
	);
}

export default App;
