import React from "react";
import { Planet } from "react-planet";
import LanguageSwitcherComponent from "./LanguageSwitcherComponent.styled";
import { IProps } from "./types";

const LanguageSwitcher: React.FC<IProps> = (props: IProps): JSX.Element => {
	return (
		<LanguageSwitcherComponent>
			<Planet
				orbitRadius={30}
				centerContent={
					<div
						style={{
							height: 30,
							width: 30,
							borderRadius: "50%",
							backgroundColor: "#1da8a4",
						}}
					/>
				}
				open
				autoClose
			></Planet>
		</LanguageSwitcherComponent>
	);
};

export default LanguageSwitcher;
