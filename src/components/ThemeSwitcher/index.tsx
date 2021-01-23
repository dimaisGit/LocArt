import React from "react";
import { THEME_NAMES } from "src/constants/theme/names";
import ThemeSwitcherComponent from "./ThemeSwitcherComponent";
import { IProps } from "./types";

const ThemeSwitcher: React.FC<IProps> = (props: IProps): JSX.Element => {
	const { handleToggleTheme, theme } = props;
	return (
		<ThemeSwitcherComponent className={theme === THEME_NAMES.light ? "" : "night"} onClick={handleToggleTheme}>
			<div className="notch">
				<div className="crater" />
				<div className="crater" />
			</div>
			<div>
				<div className="shape sm" />
				<div className="shape sm" />
				<div className="shape md" />
				<div className="shape lg" />
			</div>
		</ThemeSwitcherComponent>
	);
};

export default ThemeSwitcher;
