import { useContext } from "react";
import { Cards } from "../components/Cards";
import { DataContext } from "../Context/DataContext";

const Home = () => {
    
    //provider context data animes
    const { data, isLoading, isError } = useContext(DataContext);
    
    //check for error, show loading message waiting for render anime data
    return ( 
        <div className="home">
            { isError && <div className="text-danger text-center"><h2>{ isError }</h2></div> }
            { isLoading && <div className="text-danger text-center"><h2>Loading...</h2></div> }
            { data && <Cards data={data}/> }
        </div>
    );
}
 
export default Home;