import React from "react";
import MainContainer from "./MainContainer.styled";
import { IProps } from "./types";

const Main: React.FC<IProps> = (props: IProps): JSX.Element => {
	const { handleToggleThemeCallback } = props;
	return (
		<MainContainer>
			<button onClick={handleToggleThemeCallback}>switch theme</button>
		</MainContainer>
	);
};

export default Main;
