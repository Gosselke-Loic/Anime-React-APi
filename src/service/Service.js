import Requests from "../axios/Axios";
import debounce from "lodash/debounce";
import { useEffect, useCallback, useContext, useState} from "react";
import { DataContext } from "../Context/DataContext";

/**
 * fetch data for the first render and after fetch params request from the search bar
 * @param {string} params 
 */
const useFetchAnime = (params) => {

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

    // eslint-disable-next-line
    const delayedQuery = useCallback(debounce(updateQuery, 500),[params]);

    useEffect(() => { 
        delayedQuery();

        return delayedQuery.cancel
    }, [params, delayedQuery])

}

/**
 * Fetch data recomendations animes
 * @returns datas with fullfilled request, loading boolean, and/or error if the request is rejected
 */
const useFetchRecomendations = () => {

    const [dataRecomendation, setDataRecomendation] = useState([]);
    const [loadingRecomendation, setLoadingRecomendation] = useState(true)
    const [errorRecomendation, setErrorRecomendation] = useState(null)

    const updateQuery = async () => {
        try {
            console.log("[Service.js][updateQuery] request sended to axios");
            let query = encodeURI();
            const response = await Requests.getRecomendations(query);
            console.log(response.data)
            setDataRecomendation(response.data);
            setErrorRecomendation(null);
        } catch (err) {
            console.error("[Service.js][updateQuery] request error from service.js");
            setErrorRecomendation(err.message);
        } finally {
            setLoadingRecomendation(false);
        }
    }

    useEffect(() => { 
        updateQuery();

        return updateQuery.cancel;
    }, [])

    return {dataRecomendation, loadingRecomendation, errorRecomendation};
}

export { useFetchAnime, useFetchRecomendations };