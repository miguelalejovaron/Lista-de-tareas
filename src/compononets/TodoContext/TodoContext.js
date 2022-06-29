import React from 'react';
import { useLocalStorage } from './useLocalStorage';
//Sweet alert library
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const TodoContext = React.createContext();

function TodoProvider(props) {
	const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', []);
	const [ searchValue, setSearchValue ] = React.useState('');

	//SWEET ALERT
	const MySwal = withReactContent(Swal);

	// filtrar Todos que esten completados osea que sean true
	const completedTodos = todos.filter((todo) => !!todo.completed).length;
	const totalTodos = todos.length;

	//filtrar todos en el buscador
	let searchedTodos = [];

	if (!searchValue.length >= 1) {
		searchedTodos = todos;
	} else {
		searchedTodos = todos.filter((todo) => {
			const todoText = todo.text.toLowerCase();
			const searchText = searchValue.toLowerCase();
			return todoText.includes(searchText);
		});
	}

	const completeTodo = (text) => {
		MySwal.fire({
			title: <p>Haz terminado tu tarea 🥳</p>,
			confirmButtonText: <p>Maravilloso</p>
		});
		const todoIndex = todos.findIndex((todo) => todo.text === text);
		const newTodos = [ ...todos ];
		newTodos[todoIndex].completed = true;
		saveTodos(newTodos);
	};
	const deletedTodo = (text) => {
		MySwal.fire({
			title: <p>Acabas de borrar tu tarea 😞</p>,
			confirmButtonText: <p>Ok</p>
		});
		const todoIndex = todos.findIndex((todo) => todo.text === text);
		const newTodos = [ ...todos ];
		newTodos.splice(todoIndex, 1);
		saveTodos(newTodos);
	}
		return (
			<TodoContext.Provider
				value={{
					loading,
					error,
					totalTodos,
					completedTodos,
					searchValue,
					setSearchValue,
					searchedTodos,
					completeTodo,
					deletedTodo
				}}>
					{props.children}
			</TodoContext.Provider>
		);
	}

export { TodoContext, TodoProvider };
