import styled from "styled-components";

const Header = styled.div`
	font-family: Lato, sans-serif;
	text-transform: uppercase;
	width: fit-content;
	margin: auto;
	margin-top: 20px;
	text-align: center;
	z-index: 10000;
	& div {
		color: white;
		font-size: 22px;
	}

	& p {
		transition: 0.3s;
		font-size: 12px;
		color: rgba(255, 255, 255, 0.3);
	}

	& p:after {
		content: "";
		display: block;
		position: absolute;
		left: 50%;
		height: 1px;
		width: 0;
		background-color: white;
		transition: 0.3s;
	}

	&:hover p:after {
		left: 0;
		width: 100%;
		transition: 0.3s;
	}

	&:hover p {
		font-size: 14px;
		color: white;
	}
`;

export default Header;
