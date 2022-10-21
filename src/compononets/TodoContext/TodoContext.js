import React from 'react';
import { useLocalStorage } from './useLocalStorage';
//Toastify react js
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

	const addTodo = (text) => {
		const newTodos = [ ...todos ];
		newTodos.push({
			completed: false,
			text,
		});
		toast('Your to do has been sucessfully saved', {
			position: "bottom-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			});
		saveTodos(newTodos);
	};
	const completeTodo = (text) => {
		MySwal.fire({
			title: <p> You've finished your Task. 🥳</p>,
			confirmButtonText: <p>Maravilloso</p>
		});
		const todoIndex = todos.findIndex((todo) => todo.text === text);
		const newTodos = [ ...todos ];
		newTodos[todoIndex].completed = true;
		saveTodos(newTodos);
	};
	const deletedTodo = (text) => {
		MySwal.fire({
			title: <h2>You've deleted your Task. </h2>,
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
					addTodo,
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
