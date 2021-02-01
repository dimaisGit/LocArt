import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useHistory } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import { CLICKABLE_CLASS_NAME } from "src/constants/cursor/classnames";
import { ROUTER_LINKS, ROUTER_NAMES } from "src/constants/router/names";
import Guest from "../../assets/images/Home/Guest.svg";
const GuestLink: React.FC = () => {
    const history = useHistory();
    const { t } = useTranslation();

    const handleClick = () => history.push(ROUTER_LINKS.guest);

    return (
        <>
            <div data-tip data-for='guest-link' onClick={handleClick} className={CLICKABLE_CLASS_NAME}>
                <img src={Guest} />
            </div>
            <ReactTooltip id='guest-link' effect='solid'>
                {t("Guest.linkTooltip")}
            </ReactTooltip>
        </>
    );
};

export default GuestLink;
