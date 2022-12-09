import {
	STATE_FETCH,
	INVALID_NAME,
	MESSAGE_CHARGING,
	NOT_FOUND,
} from "./constants";

export const getMessage: (
  quote: string,
  orderStatus: STATE_FETCH
) => string = (quote, orderStatus) => {
	if (orderStatus === STATE_FETCH.CHARGING) {
		return MESSAGE_CHARGING;
	}

	if (orderStatus === STATE_FETCH.ERROR) {
		return INVALID_NAME;
	}

	return quote ? `${quote}` : NOT_FOUND;
};
