import ShowItems from "../../../../shared/presentation/components/showItems";
import { useSelector } from "react-redux";
import { allStarships } from "../../../../shared/application/redux/selectors/selector";
import { obtainedFoils } from "../../../obtainFoils/application/selectors/foilsObtained";
import { filteredData } from "../../../../shared/application/helpers/common-functions";
import { typeCard } from "../../../../shared/application/constants/utils";

const StarShip = () => {
    const starShips = useSelector(allStarships);
    const userFoils = useSelector(obtainedFoils);
    const sizeData = starShips.length;
    
    const filteredStarShips = filteredData(starShips, userFoils, typeCard.starships)



    return(
        <div>
            <ShowItems 
                title={'Naves'} 
                filteredData={filteredStarShips} 
                resourceType={typeCard.starships} 
                dataSize={sizeData} 
            />
        </div>
    );
}

export default StarShip;