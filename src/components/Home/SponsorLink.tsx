import React from "react";
import SponsorLinkComponent from "./SponsorLinkComponent.styled";
import Sponsor from "../../assets/images/Home/Sponsor.svg";
import { CLICKABLE_CLASS_NAME } from "src/constants/cursor/classnames";
import { Link, useHistory } from "react-router-dom";
import { ROUTER_LINKS, ROUTER_NAMES } from "src/constants/router/names";

const SponsorLink: React.FC = () => {
	const history = useHistory();

	const handleClick = () => history.push(ROUTER_LINKS.sponsor);

	return (
		<SponsorLinkComponent onClick={handleClick} className={CLICKABLE_CLASS_NAME}>
			<img src={Sponsor} />
		</SponsorLinkComponent>
	);
};

export default SponsorLink;
