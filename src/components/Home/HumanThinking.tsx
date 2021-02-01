import React from "react";
import HumanThinkingComponent from "./HumanThinkingComponent.styled";
import Human from "../../assets/images/Home/Human.svg";

const HumanThinking: React.FC = () => {
	return (
		<HumanThinkingComponent>
			<img src={Human} />
		</HumanThinkingComponent>
	);
};

export default HumanThinking;
