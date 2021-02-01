import React from "react";
import { useTranslation } from "react-i18next";
import PageTitle from "src/atoms/PageTitle";
import ComponentLayout from "../ComponentLayout";
import GuestSlider from "../GuestSlider";

const GuestPage: React.FC = () => {
	const { t } = useTranslation();

	return (
		<ComponentLayout>
			<PageTitle>{t("Guest.title")}</PageTitle>
			<GuestSlider />
		</ComponentLayout>
	);
};

export default GuestPage;
