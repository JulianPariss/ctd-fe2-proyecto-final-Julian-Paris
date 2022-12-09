import { useState } from "react";
import { SimpsonsNames, INFO_SIMPSONS } from "./constants";
import {
	BioContainerWrapper,
	BioButtonContainerWrapper,
	BioImageWrapper,
	BioDescriptionWrapper,
	BioNameWrapper,
	BioButtonWrapper 
} from "./bio.styles";

const Bio = () => {
	const [activeBio, setActiveBio] = useState(
		INFO_SIMPSONS[SimpsonsNames.BART]
	);

	const onClick: (name: SimpsonsNames) => void = (name) =>
		setActiveBio(INFO_SIMPSONS[name]);

	const createButtons = () => {
		return Object.keys(INFO_SIMPSONS).map((name: string) => (
			<BioButtonWrapper
				key={name as string}
				onClick={() => onClick(name as SimpsonsNames)}
				isActive={activeBio.id === name}
			>
				{name}
			</BioButtonWrapper>
		));
	};

	return (
		<BioContainerWrapper>
			<BioButtonContainerWrapper>{createButtons()}</BioButtonContainerWrapper>
			<div>
				<div>
					<BioImageWrapper
						src={activeBio.image}
						alt={activeBio.name}
					/>
				</div>
				<div>
					<BioNameWrapper>{activeBio.name}</BioNameWrapper>
					<BioDescriptionWrapper>{activeBio.description}</BioDescriptionWrapper>
				</div>
			</div>
		</BioContainerWrapper>
	);
};

export default Bio;
