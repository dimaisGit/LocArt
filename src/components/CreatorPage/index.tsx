import React from "react";
import { useTranslation } from "react-i18next";
import PageTitle from "src/atoms/PageTitle";
import ComponentLayout from "../ComponentLayout";

const CreatorPage: React.FC = () => {
	const { t } = useTranslation();

	return (
		<ComponentLayout>
			<PageTitle>{t("Creator.title")}</PageTitle>
		</ComponentLayout>
	);
};

export default CreatorPage;
