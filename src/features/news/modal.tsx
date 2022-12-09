import {
	CloseButton,
	ModalCard,
	ModalContainer,
	ModalDescription,
	ImageModal,
	ModalTitle,
	SuscribeButton,
	TextContainer,
} from "./styled";
import { SuscribeImage, CloseButton as Close } from "../../assets";

import {INormalizedNews} from "./news";

interface IProps {
    modal : INormalizedNews | null;
    setModal : (modal: INormalizedNews | null) => void;
}

const Modal = (props : IProps) => {
	const {modal, setModal} = props;
	return(
		(modal ? (
			<ModalContainer>
				<ModalCard>
					<CloseButton onClick={() => setModal(null)}>
						<img src={Close} alt="close-button" />
					</CloseButton>
					{modal.isPremium ? 
						<> 
							<ImageModal src={SuscribeImage} alt="mr-burns-excelent" />
							<TextContainer>
								<ModalTitle>Suscríbete a nuestro Newsletter</ModalTitle>
								<ModalDescription>
            Suscríbete a nuestro newsletter y recibe noticias de
            nuestros personajes favoritos.
								</ModalDescription>
								<SuscribeButton
									onClick={() =>
										setTimeout(() => {
											alert("Suscripto!");
											setModal(null);
										}, 1000)
									}
								>Suscríbete</SuscribeButton>
							</TextContainer>
						</>
						: 
						<>
							<ImageModal src={modal.image} alt="news-image" />
							<TextContainer>
								<ModalTitle>{modal.title}</ModalTitle>
								<ModalDescription>{modal.description}</ModalDescription>
							</TextContainer>
						</>
					}
				</ModalCard>
			</ModalContainer>
		) : null
		));
};

export default Modal;