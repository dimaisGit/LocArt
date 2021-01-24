import { ITheme } from "src/theme/types";
import styled from "styled-components";

const ComponentLayoutComponent = styled.div`
	backdrop-filter: blur(80px);
	padding: 10px;
	border-radius: 10px;
	background-color: ${({ theme }: { theme: ITheme }) => theme.html.body.componentContainerBackgroundColor};
	height: 300px;
	transition: all 0.3s;
`;

export default ComponentLayoutComponent;
