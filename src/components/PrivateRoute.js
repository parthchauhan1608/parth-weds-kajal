import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../context/user";

export default function PrivateRoute({ children, ...rest }) {
	const { token } = useContext(UserContext);
	console.log(token.token);

	return (
		<Route
			{...rest}
			render={() => {
				return token.token !== null ? (
					children
				) : (
					<Redirect to="/"></Redirect>
				);
			}}
		></Route>
	);
}
