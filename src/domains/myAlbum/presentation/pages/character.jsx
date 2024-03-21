import ShowItems from "../../../../shared/presentation/components/showItems";
import { useSelector } from "react-redux";
import { allCharacters } from "../../../../shared/application/redux/selectors/selector";
import { obtainedFoils } from "../../../obtainFoils/application/selectors/foilsObtained";
import { filteredData } from "../../../../shared/application/helpers/common-functions";
import { typeCard } from "../../../../shared/application/constants/utils";

const Character = () => {
    const characters = useSelector(allCharacters);
    const userFoils = useSelector(obtainedFoils);
    const sizeData = characters.length;

    const filteredCharacters = filteredData(characters, userFoils, typeCard.people)

    return(
        <div>
            <ShowItems 
                title={'Personajes'} 
                filteredData={filteredCharacters} 
                resourceType={typeCard.people} 
                dataSize={sizeData}
            />
        </div>
    );
}

export default Character;



