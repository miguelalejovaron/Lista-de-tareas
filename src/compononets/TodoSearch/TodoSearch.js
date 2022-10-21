import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import { TodoContext } from '../TodoContext/TodoContext';
import './TodoSearch.css';

function TodoSearch() {
	const {searchValue, setSearchValue} = React.useContext(TodoContext)
	const onSearchValueChange = (e) => {
		console.log(e.target.value);
		setSearchValue(e.target.value);
	}; 

	return (
		<div>
			<InputGroup className='input__container--width-style' size="default" onChange={onSearchValueChange} value={searchValue}>
				<FormControl
					aria-label="Large"
					aria-describedby="inputGroup-sizing-sm"
					placeholder="Write to look an specefic To do here."
					className="input-form"
					
				/>
			</InputGroup>
		</div>
	);
}

export { TodoSearch };
