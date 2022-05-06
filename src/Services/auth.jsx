import axios from 'axios';
import { BASE_URL} from '../constant/urls'

const headers = { 'Content-Type': 'application/json' }


export const login = async (payload) => (
    await axios.post(`${BASE_URL}/login`, payload,
        { headers: headers })
        .then(response => {
            let data = {
                status: response.status,
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


export const signup = async (payload) =>
    await axios.post(`${BASE_URL}/signup`, payload,
        { headers: headers })
        .then(response => {
            let data = {
                status: response.status,
                token: response.data.token,
                user: response.data.user
            }
            return {
                data
            }
        }
        ).catch(error =>{
            let data = {
                data: {
                    status: error.response.status,
                    error: error.response.data.message
                }
            }

            return data;
        });