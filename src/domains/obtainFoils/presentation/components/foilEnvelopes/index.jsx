import {useState} from "react";
import { useSelector } from "react-redux";
import { allFilms, allStarships, allCharacters } from "../../../../../shared/application/redux/selectors/selector";
import FoilEnvelopesModal from "../foilEnvelopesModal";
import PropTypes from 'prop-types';
import './foilEnvelopes.scss';

const FoilEnvelopes = ({image}) => {
    const films = useSelector(allFilms);
    const starShips = useSelector(allStarships);
    const characters = useSelector(allCharacters);

    const [cards, setcards] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleCard = () => {
        const configuration = Math.random() < 0.5 ? 1 : 2;
        const cards = generateCards(configuration);
        setcards(cards)
        setShowModal(true);
    }

    const generateCards = (configuration) => {
        if (configuration === 1) {
            const film = getRandomItem(films);
            const charactersSelection = getRandomItems(characters, 3);
            const starship = getRandomItem(starShips);
            return [film, ...charactersSelection, starship];
        } else {
            const charactersSelection = getRandomItems(characters, 3);
            const starshipsSelection = getRandomItems(starShips, 2);
            return [...charactersSelection, ...starshipsSelection];
        }
    }

    const getRandomItem = (array) => {
        return array[Math.floor(Math.random() * array.length)];
    }

    const getRandomItems = (array, count) => {
        const shuffled = array.slice().sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    return(
        <>
            <div className="card" onClick={() => handleCard()}>
                <article className="card_article">
                    <img className="moving-image" src={image} alt="" />
                </article>
            </div>

            <FoilEnvelopesModal
                filteredCards={cards}
                showModal={showModal}
                setShowModal={setShowModal}
            />
        </>
    )
}

FoilEnvelopes.propTypes = {
    image: PropTypes.string,
};

export default FoilEnvelopes;