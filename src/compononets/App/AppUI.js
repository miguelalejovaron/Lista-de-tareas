import React from 'react';
import './App.css';
import { TodoContext } from '../TodoContext/TodoContext';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton/CreateTodoButton';
import { CardModal } from '../CardModal/CardModal';
//REACT-BOOTSTRAP
import { Button, Card } from 'react-bootstrap';
//Bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

function AppUI() {
	const { error404, loading, searchedTodos, completeTodo, deletedTodo } = React.useContext(TodoContext);
	return (
		<div className="my-app">
			<section className="form-container">
				<Card style={{ width: '18rem' }}>
					<Card.Img variant="top" src="holder.js/100px180" />
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the bulk of the card's
							content.
						</Card.Text>
						<Button variant="primary">Go somewhere</Button>
					</Card.Body>
				</Card>
				<TodoCounter />
				<TodoSearch />

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

				<CardModal>
					<p>Hola </p>
				</CardModal>

				<CreateTodoButton />
			</section>
		</div>
	);
}

export { AppUI };
