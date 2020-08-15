import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import * as SplashScreen from "expo-splash-screen";

import { createContext } from "react";
import { signIn } from "../services/auth";

const AuthContext = createContext({
	signed: true,
	user: {},
	loading: true,
	login: () => {},
	logout: () => {}
});

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		async function loadStoredData() {
			const [user, token] = await AsyncStorage.multiGet([
				"@RNAuth:user",
				"@RNAuth:token"
			]);

			if (user && token) {
				setUser(JSON.parse(user[1]));
				if ((await SplashScreen.preventAutoHideAsync()) === true) {
					console.log("HIDING");
					await SplashScreen.hideAsync();
				}
			}
		}

		loadStoredData();
	}, []);

	async function login() {
		const response = await signIn();

		setUser(response.user);

		await AsyncStorage.setItem("@RNAuth:user", JSON.stringify(response.user));
		await AsyncStorage.setItem("@RNAuth:token", response.token);
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
