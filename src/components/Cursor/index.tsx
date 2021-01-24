import React, { useEffect, useState } from "react";
import { CLICKABLE_CLASS_NAME } from "src/constants/cursor/classnames";
import CursorComponent from "./CursorComponent.styled";
import { IPosition } from "./types";

const Cursor: React.FC = (): JSX.Element => {
	const [position, setPosition] = useState<IPosition>({
		x: 0,
		y: 0,
	});
	const [hidden, setHidden] = useState<boolean>(false);
	const [clicked, setClicked] = useState<boolean>(false);
	const [linkHovered, setLinkHovered] = useState(false);
	const [clickableHovered, setClickableHovered] = useState(false);

	useEffect(() => {
		addEventListeners();
		handleLinkHoverEvents();
		handleClickableHoverEvents();
		return () => removeEventListeners();
	}, []);

	const addEventListeners = (): void => {
		document.addEventListener("mousemove", onMouseMove);
		document.addEventListener("mouseenter", onMouseEnter);
		document.addEventListener("mouseleave", onMouseLeave);
		document.addEventListener("mousedown", onMouseDown);
		document.addEventListener("mouseup", onMouseUp);
	};

	const removeEventListeners = (): void => {
		document.removeEventListener("mousemove", onMouseMove);
		document.removeEventListener("mouseenter", onMouseEnter);
		document.removeEventListener("mouseleave", onMouseLeave);

		document.querySelectorAll("a").forEach((el: HTMLAnchorElement): void => {
			el.removeEventListener("mouseover", (): void => setLinkHovered(true));
			el.removeEventListener("mouseout", (): void => setLinkHovered(false));
		});

		document.querySelectorAll(`.${CLICKABLE_CLASS_NAME}`).forEach((el: Element): void => {
			el.removeEventListener("mouseover", (): void => setClickableHovered(true));
			el.removeEventListener("mouseout", (): void => setClickableHovered(false));
		});
	};

	const handleLinkHoverEvents = (): void => {
		document.querySelectorAll("a").forEach((el: HTMLAnchorElement): void => {
			el.addEventListener("mouseover", (): void => setLinkHovered(true));
			el.addEventListener("mouseout", (): void => setLinkHovered(false));
		});
	};

	const handleClickableHoverEvents = (): void => {
		document.querySelectorAll(`.${CLICKABLE_CLASS_NAME}`).forEach((el: Element): void => {
			el.addEventListener("mouseover", (): void => setClickableHovered(true));
			el.addEventListener("mouseout", (): void => setClickableHovered(false));
		});
	};

	const onMouseDown = (): void => {
		setClicked(true);
	};

	const onMouseUp = (): void => {
		setClicked(false);
	};

	const onMouseEnter = (): void => {
		setHidden(false);
	};

	const onMouseLeave = (): void => {
		setHidden(true);
	};

	const onMouseMove = (e: MouseEvent): void => {
		setPosition({ x: e.clientX, y: e.clientY });
	};

	const cursorClassName: string = `${hidden ? "hidden" : ""} ${clicked ? "clicked" : ""} ${linkHovered ? "link-hovered" : ""} ${
		clickableHovered ? "clickable-hovered" : ""
	}`;

	return <CursorComponent className={cursorClassName} style={{ left: `${position.x}px`, top: `${position.y}px` }}></CursorComponent>;
};

export default Cursor;
