import React from "react";
import Container from "../Container";
import HeaderLogo from "../HeaderLogo";
import LanguageSwitcher from "../LanguageSwitcher";
import SettingsIcon from "../SettingsIcon";
import ThemeSwitcher from "../ThemeSwitcher";
import HeaderComponent from "./HeaderComponent.styled";
import HeaderWrapperComponent from "./HeaderWrapperComponent.styled";
import { IProps } from "./types";

const Header: React.FC<IProps> = (props: IProps): JSX.Element => {
	const { handleToggleThemeCallback, theme } = props;

	return (
		<HeaderComponent>
			<Container>
				<HeaderWrapperComponent>
					<HeaderLogo />
					<ThemeSwitcher handleToggleTheme={handleToggleThemeCallback} theme={theme} />
					<LanguageSwitcher />
					<SettingsIcon />
				</HeaderWrapperComponent>
			</Container>
		</HeaderComponent>
	);
};

export default Header;
