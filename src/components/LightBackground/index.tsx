import React from "react";
import Cloud from "./Cloud.styled";
import CloudComponent from "./CloudComponent.styled";
import LightBackgroundComponent from "./LightBackgroundComponent.styled";
import { ICloudComponentProps, IProps } from "./types";

const clouds: ICloudComponentProps[] = [
	{
		scale: 0.5,
		animationTime: 35,
	},
	{
		scale: 0.2,
		animationTime: 70,
	},
	{
		scale: 0.7,
		animationTime: 20,
	},
	{
		scale: 0.4,
		animationTime: 30,
	},
	{
		scale: 0.8,
		animationTime: 20,
	},
];

const LightBackground: React.FC<IProps> = (props: IProps): JSX.Element => {
	const { hide } = props;

	return (
		<LightBackgroundComponent hide={hide}>
			{clouds.map(
				(cloud: ICloudComponentProps, index): JSX.Element => (
					<CloudComponent scale={cloud.scale} animationTime={cloud.animationTime} key={`${index}${cloud.scale}${cloud.animationTime}`}>
						<Cloud />
					</CloudComponent>
				)
			)}
		</LightBackgroundComponent>
	);
};

export default LightBackground;
