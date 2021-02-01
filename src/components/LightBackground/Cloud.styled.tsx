import styled from "styled-components";

const Cloud = styled.div`
	background: #fff;
	mix-blend-mode: difference;

	background: -moz-linear-gradient(top, #fff 5%, #f1f1f1 100%);
	background: -webkit-gradient(linear, left top, left bottom, color-stop(5%, #fff), color-stop(100%, #f1f1f1));
	background: -webkit-linear-gradient(top, #fff 5%, #f1f1f1 100%);
	background: -o-linear-gradient(top, #fff 5%, #f1f1f1 100%);
	background: -ms-linear-gradient(top, #fff 5%, #f1f1f1 100%);
	background: linear-gradient(top, #fff 5%, #f1f1f1 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fff', endColorstr='#f1f1f1',GradientType=0 );

	-webkit-border-radius: 100px;
	-moz-border-radius: 100px;
	border-radius: 100px;

	height: 120px;
	position: relative;
	width: 350px;

	&:after,
	&:before {
		background: #fff;
		mix-blend-mode: difference;

		content: "";
		position: absolute;
		z-index: -1;
	}

	&:after {
		-webkit-border-radius: 100px;
		-moz-border-radius: 100px;
		border-radius: 100px;

		height: 100px;
		left: 50px;
		top: -50px;
		width: 100px;
	}

	&:before {
		-webkit-border-radius: 200px;
		-moz-border-radius: 200px;
		border-radius: 200px;

		width: 180px;
		height: 180px;
		right: 50px;
		top: -90px;
	}
`;

export default Cloud;
