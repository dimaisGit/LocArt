import { ITheme } from "src/theme/types";
import styled from "styled-components";

const ComponentLayoutComponent = styled.div`
	/* backdrop-filter: blur(10px); */
	/* -webkit-backdrop-filter: blur(10px); */
	padding: 10px;
	border-radius: 10px;
	background-color: ${({ theme }: { theme: ITheme }) => theme.html.body.componentContainerBackgroundColor};
	transition: all 0.3s;
	position: relative;
`;

export default ComponentLayoutComponent;
