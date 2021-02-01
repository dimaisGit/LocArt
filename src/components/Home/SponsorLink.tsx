import React from "react";
import SponsorLinkComponent from "./SponsorLinkComponent.styled";
import Sponsor from "../../assets/images/Home/Sponsor.svg";
import { CLICKABLE_CLASS_NAME } from "src/constants/cursor/classnames";
import { Link, useHistory } from "react-router-dom";
import { ROUTER_LINKS, ROUTER_NAMES } from "src/constants/router/names";
import ReactTooltip from "react-tooltip";
import { useTranslation } from "react-i18next";

const SponsorLink: React.FC = () => {
    const history = useHistory();
    const { t } = useTranslation();

    const handleClick = () => history.push(ROUTER_LINKS.sponsor);

    return (
        <>
            <SponsorLinkComponent data-tip data-for='sponsor-link' onClick={handleClick} className={CLICKABLE_CLASS_NAME}>
                <img src={Sponsor} />
            </SponsorLinkComponent>
            <ReactTooltip id='sponsor-link' effect='solid'>
                {t("Sponsor.linkTooltip")}
            </ReactTooltip>
        </>
    );
};

export default SponsorLink;
