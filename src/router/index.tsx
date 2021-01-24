import React from "react";
import { Switch, Route } from "react-router-dom";
import Container from "src/components/Container";
import Settings from "src/components/Settings";
import { ROUTER_NAMES } from "src/constants/router/names";

const Router: React.FC = (): JSX.Element => {
	return (
		<Switch>
			<Container>
				<Route path={ROUTER_NAMES.settings}>
					<Settings />
				</Route>
			</Container>
		</Switch>
	);
};

export default Router;
