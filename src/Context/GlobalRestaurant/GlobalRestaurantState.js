import React, { useState, useEffect } from 'react';

import {GlobalRestaurantContext} from './GlobalRestaurantContext'

import { BASE_URL } from '../../constant/urls';
import axios from 'axios';
import userEvent from '@testing-library/user-event';

const GlobalRestaurantState = (props) => {

    const [restaurantsList, setRestaurantsList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [token, setToken] = useState()
    
    useEffect(()=>{

      const token =  localStorage.getItem('token')
      setToken(token)

    },[])
    
    const getRestaurantList = async () => {

      setLoading(true);
      try {
        const  {data} = await axios.get(`${BASE_URL}/restaurants`, { headers: {
          'Content-Type': 'application/json',
          auth: token
      }});
      setRestaurantsList(data.restaurants) 
     console.log("restaurantes",data.restaurants)
      } catch (err) {
        setError(err);
        console.log("erro", err.response.data.message)
      } finally {
        setLoading(false);
      }
    };

useEffect(()=>{
  getRestaurantList()
},[])

/* console.log('lista de restaurantes', restaurantsList)
     */
  const states = { restaurantsList, loading, error }
  const setters = { setRestaurantsList, setLoading, setError }


return(
    <GlobalRestaurantContext.Provider value={{states, setters}}>
        {props.children}
    </GlobalRestaurantContext.Provider>)
}

export default GlobalRestaurantState;