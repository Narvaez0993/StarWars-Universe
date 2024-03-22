import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { FaRegWindowClose } from "react-icons/fa";
import { extractIdAndResourceType, categoryFoils } from '../../../../../shared/application/helpers/common-functions';
import { obtainedFoils } from '../../../application/selectors/foilsObtained';
import { category } from '../../../application/constants/optionCards';
import { addItem } from '../../../application/slices/foilsObtained';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import './foilEnvelopesModal.scss';

Modal.setAppElement('#root');

const FoilEnvelopesModal = ({filteredCards, showModal, setShowModal }) => {
    const dispatch = useDispatch();
    const obtainedFoilsSelector = useSelector(obtainedFoils);
    const [displayedCards, setDisplayedCards] = useState(filteredCards);

    useEffect(() => {
        if (displayedCards.length === 0 && showModal) {
            handleCloseModal();
        }
    }, [displayedCards, showModal]);

    const handleCardAction = (id, resourceType) => {
        const storedIds = obtainedFoilsSelector[resourceType] || [];
        if (!storedIds.includes(id)) {
            dispatch(addItem({ id: id, resourceType: resourceType }));
            updatedDisplayedCards(id, resourceType)
        }

        showToast("Lamina añadida!", 'success');
    }

    const handleDeleteCard = (cardId, cardResourceType) => {
        updatedDisplayedCards(cardId, cardResourceType)
        showToast("Lamina Descartada!", 'error');
    }

    const updatedDisplayedCards = (cardId, cardResourceType) => {
        const newState = displayedCards.filter(card => {
            const { id, resourceType } = extractIdAndResourceType(card?.url);
            return !(id === cardId && resourceType === cardResourceType);
        });
        setDisplayedCards(newState);
    }

    const findResourceType = (id, resourceType) => {
        const storedIds = obtainedFoilsSelector[resourceType] || [];
    
        return storedIds.includes(id);
    }

    const showToast = (message, type) => {
        toast[type](message, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme:'dark'
        });
    }
    
    const renderCards = () => {
        if (!displayedCards) return null;

        return displayedCards.map((card, index) => {
            const { id, resourceType } = extractIdAndResourceType(card.url);
            const categoryCard = categoryFoils(id, resourceType)
            const cardExists = findResourceType(id, resourceType)
            return (
                <div key={index} className="modal-card">
                    <div className='content-info'>
                        <p><strong>{category[resourceType]}</strong></p>
                        <p>Id: {id}</p>
                        <p>{categoryCard}</p>
                        <p>{card?.name || card?.title}</p>
                    </div>

                    <div className='content-button'>
                        {cardExists ? (
                            <button onClick={() => handleDeleteCard(id, resourceType)}>Descartar</button>
                        ) : (
                            <button onClick={() => handleCardAction(id, resourceType)}>Añadir lamina</button>
                        )
                        }
                        
                    </div>
                </div>
            );
        });
    };
  
    const handleCloseModal = () => {
        setShowModal(false);
    }

    return(
        <Modal 
            overlayClassName="custom-overlay" 
            isOpen={showModal} 
            onRequestClose={handleCloseModal}
            style={{
                content: {
                borderRadius: '10px',
                background: 'black',
                borderColor: 'transparent',
                boxShadow: '0 0 0.75rem #ffffff9c'
                }
            }}
        >
            <div className='foil-modal-container'>
                <div className='modal-selectors'>
                    <FaRegWindowClose  onClick={handleCloseModal} />
                </div>
                <h1 className='title'>Laminas Generadas</h1>
                <div className="cards-container">
                    {renderCards()}
                </div> 
            </div>

            <ToastContainer />
        </Modal>
    )
}

FoilEnvelopesModal.propTypes = {
    filteredCards: PropTypes.array,
    showModal: PropTypes.bool,
    setShowModal: PropTypes.func
};



export default FoilEnvelopesModal;