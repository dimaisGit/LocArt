import { ITheme } from "src/theme/types";
import styled from "styled-components";

const LanguageIconComponent = styled.div`
	width: 35px;
	height: 35px;
	border-radius: 50%;
	display: flex;
	text-align: center;
	align-items: center;
	font-family: "Novar" monospace;
	color: ${({ theme }: { theme: ITheme }): string => theme.html.body.languageSwitcherFontColor};
	background-color: ${({ theme, index }: { theme: ITheme; index: number }): string => theme.html.body.languageSwitcherBackgroundColors[index]};
	box-shadow: 0 0 3px black;
	& p {
		width: 100%;
	}
	transition: all 0.5s;
`;

export default LanguageIconComponent;
