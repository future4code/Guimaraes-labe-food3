import axios from "axios";
import { BASE_URL } from "../constant/urls";

const token = localStorage.getItem("token");

const headers = { headers: { auth: token,
    'Content-Type': 'application/json' 
}};


export const address = async (body) => (
    await axios.put(`${BASE_URL}/address`, body, headers)
        .then(response => {
            let data = {
                user: response.data.user,
                token: response.data.token
            }
            return { data }
        }
        ).catch( error => {
            let data = {
                    data: {
                        status: error.response.status,
                        error: error.response.data.message
                    }
                } 

            return data;
    }));