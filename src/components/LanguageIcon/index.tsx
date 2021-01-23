import React from "react";
import LanguageIconComponent from "./LanguageIconComponent.styled";
import { IProps } from "./types";

const LanguageIcon: React.FC<IProps> = (props: IProps): JSX.Element => {
	const { language, index, clickCallback } = props;

	return (
		<LanguageIconComponent index={index} onClick={() => clickCallback(language)}>
			<p>{language}</p>
		</LanguageIconComponent>
	);
};

export default LanguageIcon;
