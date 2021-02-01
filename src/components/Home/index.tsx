import React from "react";
import ComponentLayout from "../ComponentLayout";
import HumanThinking from "./HumanThinking";
import Links from "./Links";
import { IProps } from "./types";

const Home: React.FC<IProps> = (): JSX.Element => {
	return (
		<ComponentLayout>
			<Links />
			<HumanThinking />
		</ComponentLayout>
	);
};

export default Home;
