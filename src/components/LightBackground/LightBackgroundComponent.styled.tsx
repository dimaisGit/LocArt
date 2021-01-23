import styled from "styled-components";
import { ILightBackgroundComponent } from "./types";

const LightBackgroundComponent = styled.div`
    bottom: 0;
	left: 0;
	padding-top: 50px;
	position: fixed;
	right: 0;
	top: 0;
	opacity: ${(props: ILightBackgroundComponent) => props.hide ? 0.3 : 1};
	z-index: 0;
	transition: all 1s;
`

export default LightBackgroundComponent;