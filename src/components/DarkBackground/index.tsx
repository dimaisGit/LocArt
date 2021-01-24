import React from "react";
import Particles from "react-particles-js";
import { createParams } from "./config";
import { style } from "./style";
import { IProps } from "./types";
import { observer } from "mobx-react-lite";
import nightSettingsStore from "src/store/Settings/NightSettings";

const DarkBackground: React.FC<IProps> = observer(
	(props: IProps): JSX.Element => {
		const { starsIntensivity } = nightSettingsStore;
		console.log(starsIntensivity);
		return <Particles style={style} params={createParams(starsIntensivity)} />;
	}
);

export default DarkBackground;

// export default DarkBackground;
