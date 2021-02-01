import styled from "styled-components";

const PageTitle = styled.div`
	font-family: Lato, sans-serif;
	text-transform: uppercase;
	color: white;
	height: 30px;
	line-height: 30px;
	display: inline-block;
	position: relative;
	transition: 0.3s;

	&:after {
		content: "";
		display: block;
		position: absolute;
		left: 50%;
		height: 2px;
		width: 0;
		background-color: white;
		transition: 0.3s;
	}

	&:hover {
		&:after {
			left: 0;
			width: 100%;
			transition: 0.3s;
		}
	}
`;

export default PageTitle;
