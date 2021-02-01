import React from "react";
import { Link, useHistory } from "react-router-dom";
import { CLICKABLE_CLASS_NAME } from "src/constants/cursor/classnames";
import { ROUTER_LINKS, ROUTER_NAMES } from "src/constants/router/names";
import Guest from "../../assets/images/Home/Guest.svg";
const GuestLink: React.FC = () => {
	const history = useHistory();

	const handleClick = () => history.push(ROUTER_LINKS.guest);

	return (
		<div onClick={handleClick} className={CLICKABLE_CLASS_NAME}>
			<img src={Guest} />
		</div>
	);
};

export default GuestLink;
