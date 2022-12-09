import { rest } from "msw";

export const handlers = [
	rest.get("https://thesimpsonsquoteapi.glitch.me/quotes", (req, res, ctx) => {
		const findByCharacterTest = req.url.searchParams.get("character") == "Simpson";
		const findByCharacterWithNoQuotesTest = req.url.searchParams.get("character") == "Maggie";
		if (findByCharacterTest) {
			return res(
				ctx.json([{
					quote: "I believe the children are the future... Unless we stop them now!",
					character: "Homer Simpson",
					image: "https://cdn.glitch.me/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png",
					characterDirection: "Right"
				}])
			);
		}
		else if (findByCharacterWithNoQuotesTest) {
			return res(
				ctx.json([{
				}])
			);
		}
		return res(
			ctx.json([{
				quote: "Remember the time he ate my goldfish? And you lied and said I never had a goldfish. Then why did I have the bowl, Bart? Why did I have the bowl?",
				character: "Milhouse Van Houten",
				image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMilhouseVanHouten.png?1497567513002",
				characterDirection: "Right"
			}])
		);
	})
];