import axios from "axios";
import { BASE_URL } from "../constant/urls";

export const address = async (payload, authToken) => {
    await axios.pull(`${BASE_URL}/address`, payload,
    { headers: {
            'Content-Type': 'application/json',
            'auth': authToken
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