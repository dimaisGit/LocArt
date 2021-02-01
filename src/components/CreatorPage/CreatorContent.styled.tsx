import { ITheme } from "src/theme/types";
import styled from "styled-components";

const CreatorContent = styled.div`
	float: left;
	width: 40%;
	margin: auto;
	margin-bottom: 20px;
	max-width: 450px;
	transition: 0.3s;
	& p {
		border-radius: 5px;
		padding: 10px;
		background-color: ${({ theme }: { theme: ITheme }) => theme.html.body.componentContainerBackgroundColor};
	}

	& div {
		margin: 10px 0;
		animation: buttonAnim 1s infinite;
	}

	@keyframes buttonAnim {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.1);
		}
		100% {
			transform: scale(1);
		}
	}
`;

export default CreatorContent;
