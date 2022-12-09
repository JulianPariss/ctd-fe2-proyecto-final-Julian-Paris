import { useEffect, useState } from "react";
import { getData } from "./newsUtils";
import Modal from "./modal";
import NewsCards from "./newsCards";
import {
	NewsContainer,
	NewsList,
	NewTitle,
} from "./styled";

export interface INormalizedNews {
	id: number;
	title: string;
	description: string;
	date: number | string;
    isPremium: boolean;
    image: string;
    shotDescription?: string;
}

const News = () => {
	const [news, setNews] = useState<INormalizedNews[]>([]);
	const [modal, setModal] = useState<INormalizedNews | null>(null);

	useEffect(() => {
		const data = getData();
		data.then(res => {
			setNews(res);
		});
	}, []);

	return (
		<NewsContainer>
			<NewTitle>Noticias de los Simpsons</NewTitle>
			<NewsList>
				<NewsCards news={news} setModal={setModal}/>
				<Modal modal={modal} setModal={setModal}/>
			</NewsList>
		</NewsContainer>
	);
};

export default News;
