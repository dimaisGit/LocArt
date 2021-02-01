import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import PageButton from "src/atoms/PageButton";
import PageTitle from "src/atoms/PageTitle";
import { ROUTER_NAMES } from "src/constants/router/names";
import ComponentLayout from "../ComponentLayout";
import CreatorContent from "../CreatorPage/CreatorContent.styled";
import CreatorImage from "../CreatorPage/CreatorImage.styled";
import CreatorPageComponent from "../CreatorPage/CreatorPageComponent.styled";
import sponsorImg from "../../assets/images/Sponsor/Sponsor.svg";
import { useHistory } from "react-router-dom";

const SponsorPage: React.FC = () => {
	const { t } = useTranslation();
	const [clicked, setIsClicked] = useState<boolean>(false);
	const history = useHistory();

	return (
		<ComponentLayout>
			<PageTitle>{t("Sponsor.title")}</PageTitle>
			<CreatorPageComponent>
				<CreatorImage>
					<img src={sponsorImg} />
				</CreatorImage>
				<CreatorContent>
					{clicked ? (
						<>
							<p>
								If you register as a place, you can: <br />
								1. Offer your space for creators and indicate your preferences and requirements <br />
								2. Based on this, find a creator who will enrich atmosphere in your place and make it more lively and expressive - even for free!{" "}
								<br />
								3. Support local creative community and become a part of it <br />
								4. Get more people to know about you and your facility
							</p>
							<PageButton text="About us" callback={() => history.push(ROUTER_NAMES.aboutUs)} />
						</>
					) : (
						<>
							<p>If you are a proud owner of a café, bar, or an art gallery, and you have some empty space — fill it with something creative!</p>
							<PageButton text="How?" callback={() => setIsClicked(true)} />
						</>
					)}
				</CreatorContent>
			</CreatorPageComponent>
		</ComponentLayout>
	);
};

export default SponsorPage;
