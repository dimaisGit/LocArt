import React from "react";
import LanguageSwitcher from "../LanguageSwitcher";
import ThemeSwitcher from "../ThemeSwitcher";
import HeaderComponent from "./HeaderComponent.styled";
import { IProps } from "./types";

const Header: React.FC<IProps> = (props: IProps): JSX.Element => {
	const { handleToggleThemeCallback, theme } = props;

	return (
		<HeaderComponent>
			<ThemeSwitcher handleToggleTheme={handleToggleThemeCallback} theme={theme} />
			<LanguageSwitcher />
		</HeaderComponent>
	);
};

export default Header;
