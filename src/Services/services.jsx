import axios from "axios";
import { BASE_URL } from "../constant/urls";

export const address = async (payload, authToken) => {
    await axios.put(`${BASE_URL}/address`, payload,
        { header: {
            headers:{
                'Content-Type': 'application/json',
                'auth': authToken
            }
        }
    })
    .then( response => {
        let data = {
            status: response.status
        }
        console.log("address", data)
        return { data }
    })
}


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

            console.log("get res cat",data)
            return data;
        })
}