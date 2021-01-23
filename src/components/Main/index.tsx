import React from "react";
import Header from "../Header";
import MainContainer from "./MainContainer.styled";
import { IProps } from "./types";

const Main: React.FC<IProps> = (props: IProps): JSX.Element => {
	const { handleToggleThemeCallback, theme } = props;
	return (
		<MainContainer>
			<Header theme={theme} handleToggleThemeCallback={handleToggleThemeCallback} />
		</MainContainer>
	);
};

export default Main;
