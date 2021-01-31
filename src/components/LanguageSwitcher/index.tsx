import React from "react";
import { observer } from "mobx-react-lite";
import { Planet } from "react-planet";
import LanguageIcon from "../LanguageIcon";
import LanguageSwitcherComponent from "./LanguageSwitcherComponent.styled";
import { IProps } from "./types";
import languagesStore from "src/store/Languages";
import { LANGUAGES } from "src/constants/languages";
import { useTranslation } from "react-i18next";

const LanguageSwitcher: React.FC<IProps> = (props: IProps): JSX.Element => {
	const { i18n } = useTranslation();

	return (
		<LanguageSwitcherComponent>
			<div onClick={() => i18n.changeLanguage(LANGUAGES.en).finally()}>{LANGUAGES.en}</div>
			<div onClick={() => i18n.changeLanguage(LANGUAGES.ru).finally()}>{LANGUAGES.ru}</div>
		</LanguageSwitcherComponent>
	);
};

export default observer(LanguageSwitcher);
