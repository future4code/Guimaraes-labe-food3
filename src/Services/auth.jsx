import axios from 'axios';


export const login = async (payload) =>
    await axios.post('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/login', payload,
        { headers: { 'Content-Type': 'application/json' } })
        .then(response => {
            let data = {
                status: response.status,
                token: response.data.token
            }
            return {
                data
            }
        }
        );


export const signup = async (payload) =>
    await axios.post('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/signup', payload,
        { headers: { 'Content-Type': 'application/json' } })
        .then(response => {
            let data = {
                status: response.status,
                token: response.data.token
            }
            return {
                data
            }
        }
        );