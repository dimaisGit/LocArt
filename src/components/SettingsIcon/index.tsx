import { observer } from "mobx-react-lite";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { CLICKABLE_CLASS_NAME } from "src/constants/cursor/classnames";
import { ROUTER_NAMES } from "src/constants/router/names";
import SettingsIconComponent from "./SettingsIconComponent.styled";
import SettingsSvg from "./SettingsSvg";
import { IProps } from "./types";

const SettingsIcon: React.FC<IProps> = (props: IProps): JSX.Element => {
	const history = useHistory();

	const handleClick = (): void => {
		// const isSettingsOpened: boolean = history.location.pathname.indexOf(ROUTER_NAMES.settings) >= 0;
		// if (!isSettingsOpened) {
		// 	history.push(ROUTER_NAMES.settings);
		// } else {
		// 	history.goBack();
		// }
	};

	return (
		<SettingsIconComponent className={CLICKABLE_CLASS_NAME} onClick={handleClick}>
			<SettingsSvg />
		</SettingsIconComponent>
	);
};

export default SettingsIcon;
