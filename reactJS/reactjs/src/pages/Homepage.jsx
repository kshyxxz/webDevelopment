import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Homepage() {
	const [username, setUsername] = useState();
	const navigate = useNavigate();
	function handleClick() {
		navigate("/dashboard/profile", { state: { username } });
	}
	return (
		<div>
			<p>This is a homepage</p>
			<input
				type="text"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<button onClick={handleClick}>Go to profile page</button>
		</div>
	);
}
