import Modal from 'react-modal';
import { category } from '../../../../obtainFoils/application/constants/optionCards';
import PropTypes from 'prop-types';
import './informationModal.scss';

export const objectFilms = (data) => {
    return (
        <div className='container'>
            <h1>{category[data.resourceType]}</h1>
            <h2>{data.title}</h2>
            <p>Categoría: {data.category}</p>
            <p>Episodio: {data.episode_id}</p>
            <p>Director: {data.director}</p>
            <p>Productor: {data.producer}</p>
            <p>Fecha de lanzamiento: {data.release_date}</p>
            <p>Apertura: </p>
            <p>{data.opening_crawl}</p>
            <p>Creado: {data.created}</p>
            <p>Editado: {data.edited}</p>
        </div>
    )
}

export const objectPeople = (data) => {
    return (
        <div className='container'>
            <h1>{category[data.resourceType]}</h1>
            <h2>{data.name}</h2>
            <p>Categoría: {data.category}</p>
            <p>Altura: {data.height}</p>
            <p>Peso: {data.mass}</p>
            <p>Color de pelo: {data.hair_color}</p>
            <p>Color de piel: {data.skin_color}</p>
            <p>Color de ojos: {data.eye_color}</p>
            <p>Año de nacimiento: {data.birth_year}</p>
            <p>Género: {data.gender}</p>
            <p>Creado: {date(data?.creted)}</p>
            <p>Editado: {data.edited}</p>
        </div>
    )
}

export const objectStarship = (data) => {
    return (
        <div className='container'>
            <h1>{category[data.resourceType]}</h1>
            <h2>{data.name}</h2>
            <p>Categoría: {data.category}</p>
            <p>Modelo: {data.model}</p>
            <p>Fabricante: {data.manufacturer}</p>
            <p>Costo en créditos: {data.cost_in_credits}</p>
            <p>Longitud: {data.length}</p>
            <p>Velocidad máxima atmosférica: {data.max_atmosphering_speed}</p>
            <p>Equipo: {data.crew}</p>
            <p>Pasajeros: {data.passengers}</p>
            <p>Capacidad de carga: {data.cargo_capacity}</p>
            <p>Consumibles: {data.consumables}</p>
            <p>Calificación del hiperimpulsor: {data.hyperdrive_rating}</p>
            <p>MGLT: {data.MGLT}</p>
            <p>Clase de nave estelar: {data.starship_class}</p>
            <p>Creado: {data.created}</p>
            <p>Editado: {data.edited}</p>
        </div>
    )
}

const InformationModal = ({ data, showModal, setShowModal }) => {

    console.log(data)
    const handleCloseModal = () => {
        setShowModal(false);
    } 

    const renderObject = () => {
        switch (data.resourceType) {
            case 'films':
                return objectFilms(data);
            case 'people':
                return objectPeople(data);
            case 'starships':
                return objectStarship(data)
            default:
                return <p>Unknown object type</p>;
        }
    };

    return(
        <Modal overlayClassName="custom-overlay" isOpen={showModal} onRequestClose={handleCloseModal}>
             <div className='foil-modal-container'>
                {renderObject()} 
            </div>
        </Modal>
    )

}

export default InformationModal;
