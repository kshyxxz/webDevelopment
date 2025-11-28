import { useState } from 'react';

export default function Form() {
	const [name, setName] = useState({ firstName: '', middleName: '', lastName: '' });
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(name);
	};
	const URL = 'https://restcountries.com/v3.1/name/nepal';
	async function countryDetails() {
		let response = await fetch(URL);
		let jsonResponse = await response.json();
		console.log(jsonResponse[0].altSpellings[2]);
	}
	return (
		<>
			<form>
				<input
					type="text"
					value={name.firstName}
					onChange={(e) => setName({ ...name, firstName: e.target.value })}
				/>
				<input
					type="text"
					value={name.middleName}
					onChange={(e) => setName({ ...name, middleName: e.target.value })}
				/>
				<input
					type="text"
					value={name.lastName}
					onChange={(e) => setName({ ...name, lastName: e.target.value })}
				/>
				<button onClick={(e) => handleSubmit(e)}>Submit</button>
			</form>
			{/* ... spread operator for concat*/}
			<button onClick={countryDetails}>Nepal</button>
		</>
	);
}
