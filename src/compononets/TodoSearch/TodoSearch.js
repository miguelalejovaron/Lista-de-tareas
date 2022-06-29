import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}) {

	const onSearchValueChange = (e) => {
		console.log(e.target.value);
		setSearchValue(e.target.value);
	}; 

	return (
		<div>
			<InputGroup size="lg" onChange={onSearchValueChange} value={searchValue}>
				<InputGroup.Text id="inputGroup-sizing-lg" />
				<FormControl
					aria-label="Large"
					aria-describedby="inputGroup-sizing-sm"
					placeholder="Cebolla"
					className="input-form"
					
				/>
			</InputGroup>
		</div>
	);
}

export { TodoSearch };
