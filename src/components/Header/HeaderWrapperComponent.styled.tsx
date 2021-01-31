import { ITheme } from "src/theme/types";
import styled from "styled-components";

const HeaderWrapperComponent = styled.div`
	display: flex;
	align-items: center;
	/* backdrop-filter: blur(50px); */
	flex-direction: row;
	transition: all 0.3s;
	height: 50px;
	border-radius: 10px;
	background-color: ${({ theme }: { theme: ITheme }) => theme.html.body.componentContainerBackgroundColor};
`;

export default HeaderWrapperComponent;
