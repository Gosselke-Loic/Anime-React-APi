import React from "react";
import axios from "axios";
import { BASE_URL } from "./Const_URL";

class Requests extends React.Component {
    
    static async getAnimes(params) {
        try {
            console.log("[Axios.js][getAnimes] request was sended")
            const response = await axios.get(BASE_URL.animes + params);
            console.log(response)
            if (parseInt(response.status) === 200) {
                return response.data;
            }
        } catch (err) {
            console.log("[Axios.js][getAnimes] Error to get request for Animes");
            throw new Error(err);
        }
    };

    static async getRecomendations() {
        try {
            console.log("[Axios.js][getRecomendations] request was sended")
            const response = await axios.get(BASE_URL.recomendations);
            console.log(response)
            if (parseInt(response.status) === 200) {
                return response.data;
            }
        } catch (err) {
            console.log("[Axios.js][getRecomendations] Error to get request for Recomendations");
            throw new Error(err);
        }
    };
}
 
export default Requests;