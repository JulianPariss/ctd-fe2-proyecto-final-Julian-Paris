import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../../app/store";
import { STATE_FETCH } from "./constants";
import { getQuote } from "./quoteAPI";
import { IQuote } from "./types";

export interface QuoteStatus {
    data: IQuote | null;
    state: STATE_FETCH;
}

const initialState: QuoteStatus = {
	data: null,
	state: STATE_FETCH.INACTIVE,
};

export const getQuoteAsync = createAsyncThunk(
	"quote/getQuote",
	async (character: string) => {
		try {
			const quote = await getQuote(character);
			return quote;
		} catch (err) {
			console.log(err);
			throw err;
		}
	}
);

export const quoteSlice = createSlice({
	name: "quotes",
	initialState,
	reducers: {
		clean: () => initialState,
	},

	extraReducers: (builder) => {
		builder
			.addCase(getQuoteAsync.pending, (state) => {
				state.state = STATE_FETCH.CHARGING;
			})
			.addCase(getQuoteAsync.fulfilled, (state, action) => {
				state.state = STATE_FETCH.INACTIVE;
				state.data = action.payload;
			})
			.addCase(getQuoteAsync.rejected, (state) => {
				state.state = STATE_FETCH.ERROR;
			});
	},
});

export const { clean } = quoteSlice.actions;

export const getQuoteFromTheAPI =
	(character: string) => (dispatch: AppDispatch) => {
		dispatch(clean());
		dispatch(getQuoteAsync(character));
	};

export const getQuoteFromTheState = (state: RootState) => state.quote.data;
export const getOrderStatus = (state: RootState) => state.quote.state;

export default quoteSlice.reducer;
