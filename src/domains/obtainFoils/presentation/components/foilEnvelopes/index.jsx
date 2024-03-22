import {useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { allFilms, allStarships, allCharacters } from "../../../../../shared/application/redux/selectors/selector";
import FoilEnvelopesModal from "../foilEnvelopesModal";
import PropTypes from 'prop-types';
import { TimerContext } from "../timer/timerContext";
import './foilEnvelopes.scss';

const FoilEnvelopes = ({image, title, description, txtBtn}) => {
    const { timer, setTimer } = useContext(TimerContext);

    const films = useSelector(allFilms);
    const starShips = useSelector(allStarships);
    const characters = useSelector(allCharacters);

    const [cards, setcards] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [locked, setLocked] = useState(false)

    useEffect(() => {
        const savedTimer = localStorage.getItem('foilTimer');
        if (savedTimer) {
            setTimer(parseInt(savedTimer));
        }
    }, []);

    const handleCard = () => {
        const configuration = Math.random() < 0.5 ? 1 : 2;
        const cards = generateCards(configuration);

        setLocked(true)
        setcards(cards)
        setShowModal(true);

        setTimer(60); 
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
            <div className="wrapper">
                {/* <div className="card" onClick={() => timer < 0 && handleCard} > */}
                <div className="card" onClick={timer > 0 ? null : handleCard} >
                    <article className="card_article">
                        <img className="moving-image" src={image} alt="" />
                    </article>

                    {locked ? (
                        <div className="info-timer">
                            <h1>Abierto</h1>
                        </div>
                    ) : (
                        timer > 0 ? (
                            <div className="info-timer">
                                <p>Tiempo de espera</p>
                                <h1>{timer}</h1>
                            </div>
                        ) : (
                            <div className="info">
                                <h1>{title}</h1>
                                <p>{description}</p>
                                <a className="btn" onClick={timer > 0 ? null : handleCard}>{txtBtn}</a>
                            </div>
                        )
                    )}
                </div>
            </div>

            {showModal && (
                <div>
                    <FoilEnvelopesModal
                        filteredCards={cards}
                        showModal={showModal}
                        setShowModal={setShowModal}
                    /> 
                </div>
            )}
        </>
    )
}

FoilEnvelopes.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired, 
    description: PropTypes.string.isRequired,
    txtBtn: PropTypes.string.isRequired
};

export default FoilEnvelopes;