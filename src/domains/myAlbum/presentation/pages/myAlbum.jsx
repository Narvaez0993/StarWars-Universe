import ShowItems from "../../../../shared/presentation/components/showItems";

const MyAlbum = () => {

    return(
        <div>
            <ShowItems title={'Peliculas'} />
            <ShowItems title={'Personajes'} />
            <ShowItems title={'Naves'} />
        </div>
    );
}

export default MyAlbum;