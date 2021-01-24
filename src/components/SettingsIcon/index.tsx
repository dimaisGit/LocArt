import { observer } from "mobx-react-lite";
import React from "react";
import nightSettingsStore from "src/store/Settings/NightSettings";
import SettingsIconComponent from "./SettingsIconComponent.styled";
import SettingsSvg from "./SettingsSvg";
import { IProps } from "./types";

const SettingsIcon: React.FC<IProps> = (props: IProps): JSX.Element => {
	const {} = props;

	return (
		<SettingsIconComponent>
			<SettingsSvg />
		</SettingsIconComponent>
	);
};

export default SettingsIcon;
