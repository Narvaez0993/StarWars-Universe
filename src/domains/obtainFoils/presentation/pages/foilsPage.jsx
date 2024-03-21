import FoilEnvelopes from "../components/foilEnvelopes/index";
import { optionCards } from "../../application/constants/optionCards";
import './foilsPage.scss';

const FoilsPage = () => {

    return (
        <div className="foils-container">
            <h1 className="section-title">Abre y obtén láminas exclusivas</h1>
            <div className="selection-cards">
                {optionCards.map((card,index) => (
                    <FoilEnvelopes 
                        key={index} 
                        image={card?.image} 
                        title={card?.title}
                        description={card?.description}
                        txtBtn={'Abrir'}
                    />
                ))}
            </div>
        </div>
    )
}

export default FoilsPage;