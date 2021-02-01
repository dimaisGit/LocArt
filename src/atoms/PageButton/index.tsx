import React from "react";
import { CLICKABLE_CLASS_NAME } from "src/constants/cursor/classnames";
import PageButtonComponent from "./PageButtonComponent.styled";
import { IProps } from "./types";

const PageButton: React.FC<IProps> = (props: IProps) => {
	const { text, callback } = props;
	return (
		<PageButtonComponent className={CLICKABLE_CLASS_NAME} onClick={callback}>
			{text}
		</PageButtonComponent>
	);
};

export default PageButton;
