import React from 'react';
import './App.css';
import { TodoContext } from '../TodoContext/TodoContext';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/TodoCounter/CreateTodoButton';

function AppUI() {
	return (
		<div className="my-app">
			<section className="form-container">
				<TodoCounter />
				<TodoSearch />
				<TodoContext.Consumer>
		
					{({error404, loading, searchedTodos,completeTodo, deletedTodo}) => (
						<TodoList>
							{error404 && <p>Vuelvete loco porque no funciona </p>}
							{loading && <p>Estamos cargando, no te desesperes...</p>}
							{!loading && !searchedTodos.length && <h2>Crea tu primer To Do</h2>}
							{searchedTodos.map((todo) => (
								<TodoItem
									key={todo.text}
									text={todo.text}
									completed={todo.completed}
									onComplete={() => completeTodo(todo.text)}
									onDeleted={() => deletedTodo(todo.text)}
								/>
							))}
						</TodoList>
					)}
				</TodoContext.Consumer>

				<CreateTodoButton />
			</section>
		</div>
	);
}

export {AppUI};
