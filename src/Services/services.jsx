import axios from "axios";
import { BASE_URL } from "../constant/urls";


export const getRestaurant = async (authToken) => {
    await axios.get(`${BASE_URL}/restaurants`,
        { headers: {
            'Content-Type': 'application/json',
            auth: authToken
        }})
        .then( response => {
            let data = {
                status: response.status,
                data: response.data.restaurants
            }

    /*         console.log("get res cat",data) */
            return data;
        })
}
