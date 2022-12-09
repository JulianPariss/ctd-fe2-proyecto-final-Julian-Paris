import { getNews } from "./fakeRest";

export const getData = async () => {
	const response = await getNews();

	const data = response.map((n) => {
		const title = n.title
			.split(" ")
			.map((str) => {
				return str.charAt(0).toUpperCase() + str.slice(1);
			})
			.join(" ");

		const now = new Date();
		const minutesElapsed = Math.floor(
			(now.getTime() - n.date.getTime()) / 60000
		);

		return {
			id: n.id,
			title,
			description: n.description,
			date: `Hace ${minutesElapsed} minutos`,
			isPremium: n.isPremium,
			image: n.image,
			shotDescription: n.description.substring(0, 100),
		};
	});
	return data;
};