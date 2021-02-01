import React, { useState } from "react";
import { useParams } from "react-router-dom";
import GuestSliderComponent from "./GuestSliderComponent.styled";
import { ILocationParams } from "./types";

const GuestSlider: React.FC = () => {
	const [currentSlide, setCurrentSlide] = useState<number>(0);
	let { slider } = useParams<ILocationParams>();
	console.log(slider);
	return <GuestSliderComponent></GuestSliderComponent>;
};

export default GuestSlider;
