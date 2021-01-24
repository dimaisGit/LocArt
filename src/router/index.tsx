import React from "react";
import { Switch, Route } from "react-router-dom";

const Router: React.FC = (): JSX.Element => {
	return (
		<Switch>
			<Route exact path="/settings"></Route>
		</Switch>
	);
};
