import { useContext } from "react";
import { Cards } from "../components/Cards";
import { DataContext } from "../Context/DataContext";

const Home = () => {
    
    const { data, isLoading, isError } = useContext(DataContext);
    
    return ( 
        <div className="home">
            { isError && <div className="text-danger text-center"><h2>{ isError }</h2></div> }
            { isLoading && <div className="text-danger text-center"><h2>Loading...</h2></div> }
            { data && <Cards data={data}/> }
        </div>
    );
}
 
export default Home;