import { useReducer, useState } from "react";

export default function ObjectUseReducer() {
	const [state, dispatch] = useReducer(reducer, { balance: 0 });
	const [amount, setAmount] = useState(0);
	function reducer(state, action) {
		if (action.type == "add") {
			return { ...state, balance: state.balance + action.payload };
		}
		if (action.type == "sub") {
			return { ...state, balance: state.balance - action.payload };
		}
	}
	return (
		<div>
			{state.balance}
			<input
				type="text"
				onChange={(e) => setAmount(e.target.value)}
				value={amount}
			/>
			<button
				onClick={() =>
					dispatch({ type: "add", payload: Number(amount) })
				}
			>
				Deposit
			</button>
			<button
				onClick={() =>
					dispatch({ type: "sub", payload: Number(amount) })
				}
			>
				Withdraw
			</button>
		</div>
	);
}
