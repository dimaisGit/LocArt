import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import HeaderLogoComponent from "./HeaderLogoComponent.styled";
const HeaderLogo: React.FC = (): JSX.Element => {
	const { t } = useTranslation();

	return (
		<Link to="/">
			<HeaderLogoComponent>{t("Header.title", "LOCART")}</HeaderLogoComponent>
		</Link>
	);
};

export default HeaderLogo;
