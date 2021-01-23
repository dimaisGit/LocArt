import React from "react";
import ThemeSwitcher from "../ThemeSwitcher";
import HeaderComponent from "./HeaderComponent.styled";
import { IProps } from "./types";

const Header: React.FC<IProps> = (props: IProps): JSX.Element => {
	const { handleToggleThemeCallback, theme } = props;
	return (
		<HeaderComponent>
			<ThemeSwitcher handleToggleTheme={handleToggleThemeCallback} theme={theme} />
			{/* <button onClick={handleToggleThemeCallback}>switch theme</button> */}
		</HeaderComponent>
	);
};

export default Header;
