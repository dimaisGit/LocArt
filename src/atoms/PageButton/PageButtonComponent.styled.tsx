import { ITheme } from "src/theme/types";
import styled from "styled-components";

const PageButtonComponent = styled.div`
	width: fit-content;
	padding: 5px 10px;
	border-radius: 5px;
	background-color: ${({ theme }: { theme: ITheme }) => theme.html.body.componentContainerBackgroundColor};
`;

export default PageButtonComponent;
