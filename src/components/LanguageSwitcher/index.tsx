import React from "react";
import { Planet } from "react-planet";
import { ILanguage, languages } from "src/constants/languages";
import LanguageIcon from "../LanguageIcon";
import LanguageSwitcherComponent from "./LanguageSwitcherComponent.styled";
import { IProps } from "./types";

const LanguageSwitcher: React.FC<IProps> = (props: IProps): JSX.Element => {
	const elementsInPlanet: number = 5;
	const choosedLanguage: ILanguage = languages[0];
	const languagesToChoose: ILanguage[] = languages.filter((language: ILanguage): boolean => language.name !== choosedLanguage.name);
	return (
		<LanguageSwitcherComponent>
			<Planet
				orbitRadius={50}
				dragablePlanet
				dragRadiusPlanet={20}
				rotation={105}
				centerContent={
					<LanguageIcon index={choosedLanguage.index} clickCallback={(language: string) => console.log(language)} language={choosedLanguage.name} />
				}
				hideOrbit
				autoClose
				bounceOnClose
				bounceDirection="BOTTOM"
			>
				{Array(elementsInPlanet - languagesToChoose.length).map(
					(): JSX.Element => (
						<div></div>
					)
				)}
				{languagesToChoose.map(
					(language: ILanguage): JSX.Element => (
						<LanguageIcon
							key={language.name}
							index={language.index}
							clickCallback={(language: string): void => console.log(language)}
							language={language.name}
						/>
					)
				)}
			</Planet>
		</LanguageSwitcherComponent>
	);
};

export default LanguageSwitcher;
