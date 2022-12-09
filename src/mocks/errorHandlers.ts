import { rest } from "msw";

export const errorHandlers = [
	rest.get("https://thesimpsonsquoteapi.glitch.me/quotes", (_, res, ctx) => res.once(ctx.status(400)))
];