import React from "react";
import ComponentLayoutComponent from "./ComponentLayoutComponent.styled";
import { IProps } from "./types";

const ComponentLayout: React.FC<IProps> = (props: IProps): JSX.Element => {
	const { children } = props;

	return <ComponentLayoutComponent>{children}</ComponentLayoutComponent>;
};

export default ComponentLayout;
