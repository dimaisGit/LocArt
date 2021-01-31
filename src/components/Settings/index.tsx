import React from "react";
import { useTranslation } from "react-i18next";
import ComponentLayout from "../ComponentLayout";
import { IProps } from "./types";

const Settings: React.FC<IProps> = (props: IProps): JSX.Element => {
	const { t } = useTranslation();

	return (
		<ComponentLayout>
			<div>{t("Settings.title", "Settings")}</div>
		</ComponentLayout>
	);
};

export default Settings;
