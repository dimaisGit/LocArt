import styled from "styled-components";

const HumanThinkingComponent = styled.div`
	img {
		width: 100%;
		max-width: 800px;
		transition: 0.3s;
		margin: auto;
		display: block;
		min-width: 330px;
		margin-bottom: 20px;
	}

	img:hover {
		transform: scale(1.1);
	}
`;

export default HumanThinkingComponent;
