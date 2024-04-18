// user context
import React, { useState } from "react";

const UserContext = React.createContext();

function getTokenFromLocalStorage() {
	return localStorage.getItem("token")
		? JSON.parse(localStorage.getItem("token"))
		: { token: null };
}

function UserProvider({ children }) {
	const [token, setToken] = useState(getTokenFromLocalStorage());

	//login
	const userLogin = (val) => {
		setToken(val);
		localStorage.setItem("token", JSON.stringify(val));
	};

	return (
		<UserContext.Provider
			value={{
				token,
				userLogin,
			}}
		>
			{children}
		</UserContext.Provider>
	);
}

export { UserContext, UserProvider };
