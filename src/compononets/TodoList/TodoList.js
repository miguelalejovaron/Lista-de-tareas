import React from 'react';

 //My css
import './TodoList.css'

const TodoList = (props) => {
	return (
		<section>
			<ul  className='container-list-items'>
                {props.children}
            </ul>
		</section>
	);
};

export { TodoList };
