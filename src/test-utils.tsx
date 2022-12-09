import React from "react";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import quoteSlice from "./features/quote/quoteSlice";
import { RootState } from "./app/store";

const customRender = (
	ui: React.ReactElement,
	{
		preloadedState,
		store = configureStore({
			reducer: {
				quote: quoteSlice,
			},
			preloadedState,
		}),
		...renderOptions
	}:{
        preloadedState ?: RootState;
        store?: ReturnType<typeof configureStore>;
    } = {}
) => {
	const Wrapper: React.FC<{
        children: React.ReactNode;
    }> = ({ children }) => <Provider store={store}>{children}</Provider>;
	render(ui,{
		wrapper: Wrapper,
		...renderOptions,
	});
};

export * from "@testing-library/react";

export {customRender};