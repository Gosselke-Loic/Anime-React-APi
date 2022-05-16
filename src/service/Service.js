import Requests from "../axios/Axios";
import debounce from "lodash/debounce";
import { useEffect, useCallback, useContext} from "react";
import { DataContext } from "../Context/DataContext";

const useFetch = (params) => {

    const {setData, setError, setLoading} = useContext(DataContext);

    const updateQuery = async () => {
        try {
            console.log("[Service.js][updateQuery] request sended to axios with params", params);
            let query = encodeURI(params);
            const response = await Requests.getAnimes(query);
            setData(response.data);
            setError(null);
        } catch (err) {
            console.error("[Service.js][updateQuery] request error from service.js");
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    const delayedQuery = useCallback(debounce(updateQuery, 500), [params]);

    useEffect(() => { 
        delayedQuery();

        return delayedQuery.cancel
    }, [params, delayedQuery])

}

export { useFetch };
