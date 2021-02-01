import React from "react";
import { Link, useHistory } from "react-router-dom";
import { CLICKABLE_CLASS_NAME } from "src/constants/cursor/classnames";
import { ROUTER_LINKS } from "src/constants/router/names";
import Creator from "../../assets/images/Home/Creator.svg";

const CreatorLink: React.FC = () => {
	const history = useHistory();
	const handleClick = () => history.push(ROUTER_LINKS.creator);

	return (
		<div onClick={handleClick} className={CLICKABLE_CLASS_NAME}>
			<img src={Creator} />
		</div>
	);
};

export default CreatorLink;
