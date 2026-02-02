import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
	return (
		<div>
			<Link to="profile">Profile</Link>
			<Link to="settings">Settings</Link>
			This is a dashboard
			<Outlet />
		</div>
	);
}
