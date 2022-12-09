import { useState } from "react";
import { shallowEqual } from "react-redux";
import { Button, Input, QuoteAuthor, QuoteContainer, QuoteText } from "./styled";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
	getQuoteFromTheState,
	clean,
	getOrderStatus,
	getQuoteFromTheAPI,
} from "./quoteSlice";
import { getMessage } from "./utils";

const Quote = () => {
	const [inputValue, setinputValue] = useState("");
	const { quote = "", character = "" } =
    useAppSelector(getQuoteFromTheState, shallowEqual) || {};
	const orderStatus = useAppSelector(getOrderStatus);

	const dispatch = useAppDispatch();

	const onClickGetQuote = () => dispatch(getQuoteFromTheAPI(inputValue));

	const onClickBorrar = () => {
		dispatch(clean());
		setinputValue("");
	};

	return (
		<QuoteContainer>
			<QuoteText>{getMessage(quote, orderStatus)}</QuoteText>
			<QuoteAuthor>{character}</QuoteAuthor>
			<Input
				aria-label="Author quote"
				value={inputValue}
				onChange={(e) => setinputValue(e.target.value)}
				placeholder="Ingresa el nombre del autor"
			/>
			<Button
				aria-label={inputValue ? "Obtener cita" : "Obtener cita aleatoria"}
				onClick={onClickGetQuote}
			>
				{inputValue ? "Obtener cita" : "Obtener cita aleatoria"}
			</Button>
			<Button aria-label="Borrar" onClick={onClickBorrar} secondary={true}>
        Borrar
			</Button>
		</QuoteContainer>
	);
};
export default Quote;
