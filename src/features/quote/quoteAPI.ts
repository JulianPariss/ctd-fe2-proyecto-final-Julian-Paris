import { API_URL } from "../../app/constants";
import { IQuote } from "./types";

export const getQuote: (character?: string) => Promise<IQuote> = async (
	character
) => {
	if (character && parseInt(character)) {
		throw new Error("El nombre debe ser un texto");
	}

	const url = character ? `${API_URL}?character=${character}` : API_URL;
	const response = await fetch(url);
	const [data] = await response.json();

	const normalizedData = {
		quote: data.quote,
		character: data.character,
		image: data.image,
		characterDirection: data.characterDirection,
	};

	return normalizedData;
};
