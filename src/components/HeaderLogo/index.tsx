import React from "react";
import { Link } from "react-router-dom";
import HeaderLogoComponent from "./HeaderLogoComponent.styled";
const HeaderLogo: React.FC = (): JSX.Element => {
	return (
		<Link to="/">
			<HeaderLogoComponent>LOCART</HeaderLogoComponent>
		</Link>
	);
};

export default HeaderLogo;
