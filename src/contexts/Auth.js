import React, { useState } from "react";

import { createContext } from "react";
import { signIn } from "../services/auth";

const AuthContext = createContext({
	signed: true,
	user: {},
	login: () => {},
	logout: () => {}
});

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	async function login() {
		const response = await signIn();

		setUser(response.user);
	}

	function logout() {
		setUser(null);
	}

	return (
		<AuthContext.Provider value={{ signed: !!user, user, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
