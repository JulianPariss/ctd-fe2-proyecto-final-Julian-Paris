import {
	NewCard,
	NewDateCard,
	NewDescriptionCard,
	NewImageCard,
	NewTitleCard,
	ReadButton,
} from "./styled";
import { INormalizedNews } from "./news";

interface IProps {
    news: INormalizedNews[];
    setModal : (modal: INormalizedNews | null) => void;
}

const NewsCards = (props : IProps) => {
	const { news, setModal } = props; 
	return(
		<>
			{news.map((n, key) => (
				<NewCard key={key}>
					<NewImageCard src={n.image} />
					<NewTitleCard>{n.title}</NewTitleCard>
					<NewDateCard>{n.date}</NewDateCard>
					<NewDescriptionCard>
						{n.shotDescription}
					</NewDescriptionCard>
					<ReadButton onClick={() => setModal(n)}>Ver más</ReadButton>
				</NewCard>
			))}
		</>
	);
    
};

export default NewsCards;