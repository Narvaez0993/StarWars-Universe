import ShowItems from "../../../../shared/presentation/components/showItems";
import { useSelector } from "react-redux";
import { allFilms } from "../../../../shared/application/redux/selectors/selector";
import { obtainedFoils } from "../../../obtainFoils/application/selectors/foilsObtained";
import { filteredData } from "../../../../shared/application/helpers/common-functions";
import { typeCard } from "../../../../shared/application/constants/utils";


const Film = () => {
    const films = useSelector(allFilms);
    const userFoils = useSelector(obtainedFoils);
    const sizeData = films.length;

    const filteredFilms = filteredData(films, userFoils, typeCard.films)

    return(
        <div>
            <ShowItems 
                title={'Peliculas'} 
                filteredData={filteredFilms} 
                resourceType={typeCard.films} 
                dataSize={sizeData}
            />
        </div>
    );
}

export default Film;