import React, { useState } from 'react';
import ReactDOM from 'react-dom';
//REACT-BOOTSTRAP
import { Button, Modal } from 'react-bootstrap';
//Bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
// My css
import "./CardModal.css"


function CardModal({ children }) {
	const [ show, setShow ] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return ReactDOM.createPortal(
		<div className='cardMyBox'>
			<Button variant="primary" onClick={handleShow}>
				Pruebita
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>{children}</Modal.Body>

				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</div>,
		document.getElementById('modal')
	);
}

export { CardModal};
