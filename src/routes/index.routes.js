import React, { useContext } from "react";

import AuthRoutes from "../routes/auth.routes";
import AppRoutes from "../routes/app.routes";

import AuthContext from "../contexts/Auth";

const Routes = () => {
	const { signed } = useContext(AuthContext);

	return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
