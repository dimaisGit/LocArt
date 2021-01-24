import styled from "styled-components";
import { ICursorComponentProps } from "./types";

const CursorComponent = styled.div`
	width: 40px;
	height: 40px;
	border: 2px solid #fefefe;
	border-radius: 100%;
	position: fixed;
	transform: translate(-50%, -50%);
	pointer-events: none;
	z-index: 9999;
	mix-blend-mode: difference;
	transition: all 0.3s;
	transition-property: opacity, background-color, transform, mix-blend-mode;

	&.hidden {
		opacity: 0;
	}

	&.clicked {
		transition-property: opacity, background-color, transform, mix-blend-mode;
		transform: translate(-50%, -50%) scale(0.9);
		background-color: #fefefe;
	}

	&.link-hovered,
	&.clickable-hovered {
		transform: translate(-50%, -50%) scale(1.25);
		background-color: #fefefe;
	}
`;

export default CursorComponent;
