import React from 'react';
//Components ToDo Context
import { Spinner } from 'react-bootstrap';
import { TodoContext } from '../TodoContext/TodoContext';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton/CreateTodoButton';
import './AppUI.css';
//REACT-BOOTSTRAP
import { Card } from 'react-bootstrap';
//Bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
//My css
import './App.css';

function AppUI() {
	const { error404, loading, searchedTodos, completeTodo, deletedTodo } = React.useContext(TodoContext);
	return (
		<div className="my-app">
			<Card>
			<CreateTodoButton />
				<Card.Body className="My-ui-box-app--characteristics">
					<Card.Title>
						<TodoCounter />
					</Card.Title>
					<TodoSearch />
					<TodoList>
						{error404 && <p>Something is wrong </p>}
						{loading && (
							<div>
								<h5 className="text-center loading__title--font-size">
									Loading Your To Do's 
								</h5>
								<Spinner animation="border" className="loading__spinner--color" />
							</div>
						)}
						{!loading &&
						!searchedTodos.length && (
							<div>
								<h2 className="empty-advice__title--font-styles text-center">CREATE YOUR FIRST TO DO</h2>
							</div>
						)}
						{searchedTodos.map((todo) => (
							<ul key={todo.text} className="item-list__container--flex-size">
								<TodoItem
									key={todo.text}
									text={todo.text}
									completed={todo.completed}
									onComplete={() => completeTodo(todo.text)}
									onDeleted={() => deletedTodo(todo.text)}
									Todo={todo}
								/>
							</ul>
						))}
					</TodoList>
				</Card.Body>
			</Card>
		</div>
	);
}

export { AppUI };
