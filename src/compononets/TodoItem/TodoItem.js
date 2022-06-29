import React from 'react';
import './TodoItem.css';
// FontAwesome library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';


const TodoItem = (props) => {


	return (
		<div>
			<li className="items-styles">
				<span>
					<FontAwesomeIcon
						className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
						icon={faCircleCheck}
						onClick={props.onComplete}
					/>
				</span>
				<p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
				<span>
					<FontAwesomeIcon className="Icon Icon-delete" icon={faDeleteLeft} onClick={props.onDeleted} />
				</span>
			</li>
		</div>
	);
};

export { TodoItem };
