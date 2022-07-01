import { CardsRecomendations } from "../components/Cards";
import { useFetchRecomendations } from "../service/Service";

const Recomendations = () => {

    //provide error if rejected request, boolean for loading and data animes
    const {dataRecomendation, loadingRecomendation, errorRecomendation} = useFetchRecomendations();
    
    //check for error, show loading message waiting for render anime data
    return (
        <div className="Recomendations">
            { errorRecomendation && <div className="text-danger text-center"><h2>{ errorRecomendation }</h2></div> }
            { loadingRecomendation && <div className="text-danger text-center"><h2>Loading...</h2></div> }
            { dataRecomendation && <CardsRecomendations dataRecomendation={dataRecomendation}/> }
        </div>
    );
}
 
export default Recomendations;