import React, { useContext } from "react";
import { View, Button, StyleSheet } from "react-native";
import AuthContext from "../../contexts/Auth";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		paddingLeft: 35,
		paddingRight: 35
	}
});

const SignIn = () => {
	const { login, signed } = useContext(AuthContext);
	console.log(signed);

	function handleSignIn() {
		login();
	}

	return (
		<View style={styles.container}>
			<Button title="Sign In" onPress={handleSignIn} />
		</View>
	);
};

export default SignIn;
