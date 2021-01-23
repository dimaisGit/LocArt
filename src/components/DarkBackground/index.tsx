import React from "react";
import Particles from "react-particles-js";
import { params } from "./config";
import { style } from "./style";
import { IProps } from "./types";

const DarkBackground: React.FC<IProps> = (props: IProps): JSX.Element => {
	return <Particles style={style} params={params} />;
};

export default DarkBackground;
