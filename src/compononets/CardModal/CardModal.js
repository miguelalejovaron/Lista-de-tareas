import React, { useState } from 'react';
import { TodoContext } from '../TodoContext/TodoContext';
//Sweet alert library
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
// FontAwesomeIcons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';


// React-bootstrap
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// My css
import './CardModal.css';

function CardModal() {
	const [ newTodoValue, setNewTodoValue ] = React.useState('');
	const { addTodo } = React.useContext(TodoContext);
	const [ show, setShow ] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	//SWEET ALERT
	const MySwal = withReactContent(Swal);

	const onChange = (event) => {
		setNewTodoValue(event.target.value);
	};
	const onSubmit = (event) => {
		event.preventDefault();
		MySwal.fire({
			title: <h2>Your to do has been sucessfully saved 🥳</h2>,
			confirmButtonText: <p>Yupiii </p>
		});
		addTodo(newTodoValue);
		handleClose();
	};
	return (
		<div className="todo-form-modal__container--position">
			<button type="click" className="modal-button__trigger--color-styles" onClick={handleShow}>
				<FontAwesomeIcon icon={faCirclePlus} className="item-add-span" beat/>
			</button>
			<Modal className="modal__container--flex" show={show} onHide={handleClose}>
				<form onSubmit={onSubmit}>
					<Modal.Header closeButton>
						<Modal.Title>
							<h2>Please write in the box above to add your TO DO</h2>
						</Modal.Title>
					</Modal.Header>
					<Modal.Body className="modal__body--styles">
						<label />
						<textarea
							placeholder="Cortar la cebolla para el almuerzo"
							value={newTodoValue}
							onChange={onChange}
							className="modal__textarea--styles"
						/>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Cancel
						</Button>
						<Button variant="primary" type="submit">
							Add
						</Button>
					</Modal.Footer>
				</form>
			</Modal>
		</div>
	);
}
export { CardModal };
