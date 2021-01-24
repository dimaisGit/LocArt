import styled from "styled-components";

const SettingsIconComponent = styled.div`
	width: 32px;
	height: 32px;
	margin: 0 10px;

	& svg:hover {
		transform: scale(1.1);
	}

	& svg {
		transition: all 0.3s;
		width: 100%;
		height: 100%;
	}
`;

export default SettingsIconComponent;
