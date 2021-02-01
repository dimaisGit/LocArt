import { ITheme } from "src/theme/types";
import styled from "styled-components";

const AboutUsPageComponent = styled.div`
	font-family: Lato, sans-serif;
	color: white;

	& img {
		width: 50%;
		margin: auto;
		margin-top: 10%;
		display: block;
	}

	& .header {
		position: absolute;
		width: fit-content;
		top: 30px;
		width: 100%;
		text-align: center;
	}

	& .header p {
		font-size: 22px;
	}

	& .header div {
		transition: 0.3s;
		font-size: 14px;
		color: rgba(255, 255, 255, 0.5);
	}

	& .header:hover div {
		font-size: 16px;
		color: white;
	}

	& .header div:after {
		content: "";
		display: block;
		position: absolute;
		left: 50%;
		height: 1px;
		width: 0;
		background-color: white;
		transition: 0.3s;
	}

	& .header:hover div:after {
		left: -10px;
		width: 100%;
		transition: 0.3s;
	}

	& .about-us-content div {
		font-size: 20px;
		text-align: center;
		margin-bottom: 10px;
	}

	& .about-us-content {
		top: 90px;
		left: 50%;
		transform: translateX(-50%);
		position: absolute;
		min-width: 400px;
		padding: 10px;
		border-radius: 10px;
		background-color: ${({ theme }: { theme: ITheme }) => theme.html.body.componentContainerBackgroundColor};
		transition: all 0.3s;
	}
`;

export default AboutUsPageComponent;
