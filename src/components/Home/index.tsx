import React from "react";
import { CLICKABLE_CLASS_NAME } from "src/constants/cursor/classnames";
import ComponentLayout from "../ComponentLayout";
import Header from "./Header.styled";
import HumanThinking from "./HumanThinking";
import Links from "./Links";
import { IProps } from "./types";

const Home: React.FC<IProps> = (): JSX.Element => {
	return (
		<ComponentLayout>
			<Header className={CLICKABLE_CLASS_NAME}>
				<div>Before we start, tell us who you are:</div>
				<p>LocArt is where creators and places meet. And we help them to connect.</p>
			</Header>
			<Links />
			<HumanThinking />
		</ComponentLayout>
	);
};

export default Home;
