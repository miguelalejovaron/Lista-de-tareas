import React from 'react';

const TodoList = (props) => {
	return (
		<section>
			<ul className=''>
                {props.children}
            </ul>
		</section>
	);
};

export { TodoList };
