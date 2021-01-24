import styled from "styled-components";

const ThemeSwitcherComponent = styled.div`
	height: 25px;
	width: 50px;
	border-radius: 12px;
	/* margin: auto; */
	background-image: linear-gradient(aqua, skyblue);
	position: relative;
	display: flex;
	margin-left: auto;

	.notch {
		height: 22px;
		width: 22px;
		border-radius: 50%;
		background: yellow;
		position: absolute;
		top: 1.2px;
		left: 1.2px;
		box-shadow: 0 0 1.2px yellow;
		z-index: 1;
		transition: all 0.3s ease;
	}

	.notch > .crater {
		background: burlywood;
		border-radius: 50%;
		position: absolute;
		opacity: 0;
		box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4) inset;
	}
	&.night .crater {
		opacity: 0.4;
	}

	.crater:first-child {
		left: 1.2px;
		top: 3.2px;
		height: 4px;
		width: 10px;
		transform: rotate(-45deg);
	}

	.crater:last-child {
		right: 2.5px;
		top: 3.2px;
		height: 3.2px;
		width: 6px;
		transform: rotate(45deg);
	}

	&.night > .notch {
		background: whitesmoke;
		box-shadow: 0 0 1.2px whitesmoke;
		transform: translate(25px, 0);
	}

	&.night {
		background-image: linear-gradient(midnightblue, rebeccapurple);
	}

	.shape {
		position: absolute;
		background: whitesmoke;
		border-radius: 50%;
		transition: all 0.3s ease;
	}

	.shape.sm {
		height: 1.2px;
		width: 12.5px;
		top: 50%;
		left: 60%;
	}

	.shape.md {
		height: 2.5px;
		width: 19px;
		top: 25%;
		left: 25%;
		z-index: 2;
	}

	.shape.lg {
		height: 3.2px;
		width: 25px;
		bottom: 5px;
		left: 25%;
	}

	.night .shape {
		background: lightgray;
		box-shadow: 0 0 2.5px 1px violet;
	}

	.night .shape.sm {
		height: 1.2px;
		width: 1.2px;
		transform: translate(-10px, 0);
	}

	.night .shape.sm:first-of-type {
		transform: translate(-20px, -2.5px);
	}

	.night .shape.md {
		height: 2.5px;
		width: 2.5px;
		transform: translate(2.5px, 0);
	}

	.night .shape.lg {
		height: 3.2px;
		width: 3.2px;
		transform: translate(-2.5px, 0);
	}
`;

export default ThemeSwitcherComponent;
