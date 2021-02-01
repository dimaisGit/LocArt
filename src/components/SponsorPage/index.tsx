import React from "react";
import { useTranslation } from "react-i18next";
import PageTitle from "src/atoms/PageTitle";
import ComponentLayout from "../ComponentLayout";

const SponsorPage: React.FC = () => {
	const { t } = useTranslation();

	return (
		<ComponentLayout>
			<PageTitle>{t("Sponsor.title")}</PageTitle>
		</ComponentLayout>
	);
};

export default SponsorPage;
