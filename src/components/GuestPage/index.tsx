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
								If you register as a creator, you can: <br />
								1. Publish your portfolio, define precisely your creative activities and requirements for places <br />
								2. Find a nearby place (cafè, bar, university, or art gallery), where they really need your creative touch - even for free! <br />
								3. Go public with your creativity, even if you are beginner
							</p>
							<PageButton text="About us" callback={() => history.push(ROUTER_NAMES.aboutUs)} />
						</>
					) : (
						<>
							<p>It’s time to get out and show what you've got! We'll help you on that.</p>
							<PageButton text="How?" callback={() => setIsClicked(true)} />
						</>
					)}
				</CreatorContent>
			</CreatorPageComponent>
		</ComponentLayout>
	);
};

export default GuestPage;
