import { ITheme } from "src/theme/types";
import styled from "styled-components";

const HeaderLogoComponent = styled.div`
	/* align-self: flex-start; */
	/* margin-left: 10px; */
	position: relative;
	margin: 0 10px;
	padding: 0 5px;
	font-family: "Lato";
	--border-width: 2px;
	--border-radius: 5px;
	height: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: Lato, sans-serif;
	text-transform: uppercase;
	color: white;
	background: #222;
	border-radius: var(--border-radius);

	&::after {
		position: absolute;
		content: "";
		top: calc(-1 * var(--border-width));
		left: calc(-1 * var(--border-width));
		z-index: -1;
		width: calc(100% + var(--border-width) * 2);
		height: calc(100% + var(--border-width) * 2);
		background: linear-gradient(60deg, ${({ theme }: { theme: ITheme }): string => theme.html.body.color.join(", ")});
		background-size: 300% 300%;
		background-position: 0 50%;
		border-radius: calc(2 * var(--border-width));
		animation: moveGradient 4s alternate infinite;
	}

	@keyframes moveGradient {
		50% {
			background-position: 100% 50%;
		}
	}

	& .title {
		font-size: 20px;
		font-weight: 500;
		color: white;
	}
`;

export default HeaderLogoComponent;
