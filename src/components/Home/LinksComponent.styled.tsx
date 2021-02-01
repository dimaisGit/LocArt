import { ITheme } from "src/theme/types";
import styled from "styled-components";

const LinksComponent = styled.div`
	width: 72%;
	margin: auto;
	position: absolute;
	left: 50%;
	margin-top: 8%;
	transform: translateX(-50%);
	min-width: 300px;
	display: flex;
	justify-content: space-around;
	z-index: 10;

	div {
		width: fit-content;
	}

	img {
		transition: 0.3s;
		display: block;
		width: 100%;
	}

	div:hover img {
		filter: drop-shadow(3px 3px 5px ${({ theme }: { theme: ITheme }) => theme.html.body.svgShadowColor});
		transform: scale(1.1);
	}
`;

export default LinksComponent;
