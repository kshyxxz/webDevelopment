import { useContext } from "react";
import { userContext } from "./Context";

export default function Checkout() {
	const { user } = useContext(userContext);
	return <div>Checkout as {user.value}</div>;
}
