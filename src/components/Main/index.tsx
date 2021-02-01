import React from "react";
import Router from "src/router";
import Header from "../Header";
import MainContainer from "./MainContainer.styled";
import { IProps } from "./types";

const Main: React.FC<IProps> = (props: IProps): JSX.Element => {
	const { handleToggleThemeCallback, theme } = props;
	return (
		<MainContainer>
			<Header theme={theme} handleToggleThemeCallback={handleToggleThemeCallback} />
			<Router />
		</MainContainer>
	);
};

export default Main;
