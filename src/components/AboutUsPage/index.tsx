import React from "react";
import PageTitle from "src/atoms/PageTitle";
import ComponentLayout from "../ComponentLayout";
import CreatorImage from "../CreatorPage/CreatorImage.styled";
import DasisWe from "../../assets/images/AboutUs/We.svg";
import AboutUsPageComponent from "./AboutUsPageComponent.styled";
import { CLICKABLE_CLASS_NAME } from "src/constants/cursor/classnames";
const AboutUsPage: React.FC = () => {
	return (
		<ComponentLayout>
			<PageTitle>About us</PageTitle>
			<AboutUsPageComponent>
				<img src={DasisWe} />
				<div className={`header ${CLICKABLE_CLASS_NAME}`}>
					<p>LocArt is a small, but courageous team of dreamers.</p>
					<div>We believe we can make local creative communities change our city spaces and help them develop.</div>
				</div>
				<div className="about-us-content">
					<div>What do we offer?</div>
					1. Simplified online-communication of creator and place <br />
					2. Tag-based search and matching (e.g. theme, style, rules and requirements of the sides) <br />
					3. Additional services (e.g. installing the artwork, help with transportation), if needed
				</div>
			</AboutUsPageComponent>
		</ComponentLayout>
	);
};

export default AboutUsPage;
