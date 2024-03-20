import './foilEnvelopesModal.scss';
import Modal from 'react-modal';
import { FaRegWindowClose } from "react-icons/fa";
import { extractIdAndResourceType } from '../../../../../shared/application/helpers/common-functions';
import { obtainedFoils } from '../../../application/selectors/foilsObtained';
import { category } from '../../../application/constants/optionCards';
import { addItem } from '../../../application/slices/foilsObtained';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

Modal.setAppElement('#root');

const FoilEnvelopesModal = ({filteredCards, showModal, setShowModal }) => {
    const dispatch = useDispatch();
    const obtainedFoilsSelector = useSelector(obtainedFoils);

    const handleCardAction = (id, resourceType) => {
        const storedIds = obtainedFoilsSelector[resourceType] || [];
        if (!storedIds.includes(id)) {
            dispatch(addItem({ id: id, resourceType: resourceType }));
        }
    }

    const findResourceType = (id, resourceType) => {
        const storedIds = obtainedFoilsSelector[resourceType] || [];
    
        return storedIds.includes(id);
    }
    
    const renderCards = () => {
        if (!filteredCards) return null;

        return filteredCards.map((card, index) => {
            const { id, resourceType } = extractIdAndResourceType(card.url);
            const cardExists = findResourceType(id, resourceType)
            return (
                <div key={index} className="card modal-card">
                    <p>ID: {id}</p>
                    <p>Categoria: {category[resourceType]}</p>
                    <p>{card.name || card.title}</p> 
                    <div>
                        
                        {cardExists ? (
                            <button>Descartar</button>
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

        <Modal isOpen={showModal} onRequestClose={handleCloseModal}>
            <div className='foil-modal-container'>
                <div className='modal-selectors'>
                    <h2>Láminas Generadas</h2>
                    <FaRegWindowClose  onClick={handleCloseModal} />
                </div>

                <div className="cards-container">
                    {renderCards()}
                </div> 
            </div>
        </Modal>
    )
}

FoilEnvelopesModal.propTypes = {
    filteredCards: PropTypes.array,
    showModal: PropTypes.bool,
    setShowModal: PropTypes.func
};



export default FoilEnvelopesModal;