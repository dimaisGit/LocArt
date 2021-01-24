import React from "react";
import ComponentLayout from "../ComponentLayout";
import { IProps } from "./types";

const Settings: React.FC<IProps> = (props: IProps): JSX.Element => {
	return (
		<ComponentLayout>
			<div>Settings</div>
		</ComponentLayout>
	);
};

export default Settings;
