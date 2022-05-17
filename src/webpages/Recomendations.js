import { useContext } from "react";
import { CardsRecomendations } from "../components/Cards";
import { DataContext } from "../Context/DataContext";
import { useFetchRecomendations } from "../service/Service";

const Recomendations = () => {

    useFetchRecomendations("");
    const { data, isLoading, isError } = useContext(DataContext);

    return (
        <div className="Recomendations">
            { isError && <div className="text-danger text-center"><h2>{ isError }</h2></div> }
            { isLoading && <div className="text-danger text-center"><h2>Loading...</h2></div> }
            { data && <CardsRecomendations data={data}/> }
        </div>
    );
}
 
export default Recomendations;