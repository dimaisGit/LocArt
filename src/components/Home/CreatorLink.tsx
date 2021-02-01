import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useHistory } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import { CLICKABLE_CLASS_NAME } from "src/constants/cursor/classnames";
import { ROUTER_LINKS } from "src/constants/router/names";
import Creator from "../../assets/images/Home/Creator.svg";

const CreatorLink: React.FC = () => {
    const history = useHistory();
    const { t } = useTranslation();
    const handleClick = () => history.push(ROUTER_LINKS.creator);

    return (
        <>
            <div data-tip data-for='creator-link' onClick={handleClick} className={CLICKABLE_CLASS_NAME}>
                <img src={Creator} />
            </div>
            <ReactTooltip id='creator-link' effect='solid'>
                {t("Creator.linkTooltip")}
            </ReactTooltip>
        </>
    );
};

export default CreatorLink;
