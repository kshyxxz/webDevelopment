import { useReducer, useState } from "react";

export default function UseReducer() {
	const [change, setChange] = useState(1);
	const [state, dispatch] = useReducer(reducer, 0);
	function reducer(state, action) {
		if (action.type == "increment") {
			return state + action.payload;
		}
		if (action.type == "decrement") {
			return state - action.payload;
		}
		return state;
	}
	return (
		<div>
			{state} <br />
			<input
				type="number"
				onChange={(e) => setChange(Number(e.target.value))}
			/>
			<button
				onClick={() => dispatch({ type: "increment", payload: change })}
			>
				Increment
			</button>
			<button
				onClick={() => dispatch({ type: "decrement", payload: change })}
			>
				Decrement
			</button>
		</div>
	);
}
