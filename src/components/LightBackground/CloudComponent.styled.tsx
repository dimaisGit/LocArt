import styled from "styled-components";
import React from "react";
import { IProps } from "../Main/types";
import { ICloudComponentProps } from "./types";

const CloudComponent = styled.div`
	-webkit-animation: animateCloud ${(props: ICloudComponentProps) => props.animationTime}s linear infinite;
	-moz-animation: animateCloud ${(props: ICloudComponentProps) => props.animationTime}s linear infinite;
	animation: animateCloud ${(props: ICloudComponentProps) => props.animationTime}s linear infinite;

	transform: scale(${(props: ICloudComponentProps) => props.scale});

	@-webkit-keyframes animateCloud {
		0% {
			margin-left: -1000px;
		}
		100% {
			margin-left: 100%;
		}
	}

	@-moz-keyframes animateCloud {
		0% {
			margin-left: -1000px;
		}
		100% {
			margin-left: 100%;
		}
	}

	@keyframes animateCloud {
		0% {
			margin-left: -1000px;
		}
		100% {
			margin-left: 100%;
		}
	}
`;

export default CloudComponent;
