import { createContext, useState } from "react";
import Checkout from "./Checkout";
import Login from "./Login";
export const userContext = createContext();

export default function Context() {
	const [user, setUser] = useState("guest");
	return (
		<div>
			<userContext.Provider value={{ user, setUser }}>
				<Login />
				<Checkout />
			</userContext.Provider>
		</div>
	);
}
