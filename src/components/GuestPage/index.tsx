import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import PageButton from "src/atoms/PageButton";
import PageTitle from "src/atoms/PageTitle";
import { ROUTER_NAMES } from "src/constants/router/names";
import ComponentLayout from "../ComponentLayout";
import CreatorContent from "../CreatorPage/CreatorContent.styled";
import CreatorImage from "../CreatorPage/CreatorImage.styled";
import CreatorPageComponent from "../CreatorPage/CreatorPageComponent.styled";
import guestPage from "../../assets/images/Guest/Guest.svg";

const GuestPage: React.FC = () => {
	const { t } = useTranslation();
	const [clicked, setIsClicked] = useState<boolean>(false);
	const history = useHistory();

	return (
		<ComponentLayout>
			<PageTitle>{t("Guest.title")}</PageTitle>
			<CreatorPageComponent>
				<CreatorImage>
					<img src={guestPage} />
				</CreatorImage>
				<CreatorContent>
					{clicked ? (
						<>
							<p>
								Soon, when there’re more places and creators on the platform, we’ll be able to show you News - recent events from creative community
								around you, and notify you if something is about to happen.
							</p>
							<PageButton text="About us" callback={() => history.push(ROUTER_NAMES.aboutUs)} />
						</>
					) : (
						<>
							<p>Are you a huge art fan? We bet you are. One thing we can guarantee: art is always closer than you think!</p>
							<PageButton text="Really?" callback={() => setIsClicked(true)} />
						</>
					)}
				</CreatorContent>
			</CreatorPageComponent>
		</ComponentLayout>
	);
};

export default GuestPage;
