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

const Dashboard = () => {
	const { logout } = useContext(AuthContext);

	function handleSignOut() {
		logout();
	}

	return (
		<View style={styles.container}>
			<Button title="Sign Out" onPress={handleSignOut} />
		</View>
	);
};

export default Dashboard;
