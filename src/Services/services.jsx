import axios from "axios";
import { BASE_URL } from "../constant/urls";

<<<<<<< HEAD
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
=======
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
>>>>>>> master
