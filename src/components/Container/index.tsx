import React from "react";
import ContainerComponent from "./ContainerComponent.styled";
import { IProps } from "./types";

const Container: React.FC<IProps> = (props: IProps): JSX.Element => {
	const { children } = props;

	return <ContainerComponent>{children}</ContainerComponent>;
};

export default Container;
