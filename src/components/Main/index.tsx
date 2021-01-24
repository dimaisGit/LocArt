import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "src/router";
import Header from "../Header";
import MainContainer from "./MainContainer.styled";
import { IProps } from "./types";

const Main: React.FC<IProps> = (props: IProps): JSX.Element => {
	const { handleToggleThemeCallback, theme } = props;
	return (
		<BrowserRouter>
			<MainContainer>
				<Header theme={theme} handleToggleThemeCallback={handleToggleThemeCallback} />
				<Router />
			</MainContainer>
		</BrowserRouter>
	);
};

export default Main;
