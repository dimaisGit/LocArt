import React from "react";
import { Animated } from "react-animated-css";
import CreatorLink from "./CreatorLink";
import GuestLink from "./GuestLink";
import LinksComponent from "./LinksComponent.styled";
import SponsorLink from "./SponsorLink";

const Links: React.FC = () => {
	return (
		<LinksComponent>
			<Animated isVisible={true} animationIn="zoomIn" animationOut="zoomOut">
				<SponsorLink />
			</Animated>
			<Animated isVisible={true} animationIn="zoomIn" animationOut="zoomOut">
				<CreatorLink />
			</Animated>
			<Animated isVisible={true} animationIn="zoomIn" animationOut="zoomOut">
				<GuestLink />
			</Animated>
		</LinksComponent>
	);
};

export default Links;
