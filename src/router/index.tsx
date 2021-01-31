import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Container from "src/components/Container";
import Home from "src/components/Home";
import Settings from "src/components/Settings";
import { ROUTER_NAMES } from "src/constants/router/names";
import "../assets/css/router.css";

const Router: React.FC = (): JSX.Element => {
	const location = useLocation();

	return (
		<Container>
			<TransitionGroup>
				<CSSTransition key={location.key} classNames="router-animation" timeout={200}>
					<Switch>
						<Route path="/" exact>
							<Home />
						</Route>
						<Route path={ROUTER_NAMES.settings}>
							<Settings />
						</Route>
					</Switch>
				</CSSTransition>
			</TransitionGroup>
		</Container>
	);
};

export default Router;
