import React from 'react';
import "./CreateTodoButton.css"

const CreateTodoButton = () => {
	const onClickButton = (msg) => {
		alert(msg);
	}
	return (

		<div>
			<button 
			className='add-button-on-the-list'
			onClick={() => onClickButton("Hola desde alert")}
			>
				+
			</button>
		</div>
	);
};

export { CreateTodoButton };
