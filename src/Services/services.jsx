import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { GlobalStateContext } from "../Context/GlobalStateContext";


export const getRestaurant = (url, initialState) => {
  const [restaurants, setRestaurants] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const { states, setters } =  useContext(GlobalStateContext); 

  useEffect(() => {

    const token = states.token

    console.log("token na services", states.token)

    const fetch = async () => {
      setLoading(true);
      try {
        const  {data} = await axios.get(url,  { headers: {
          'Content-Type': 'application/json',
          auth: token
      }});
     setRestaurants(data.restaurants) 
     console.log("restaurantes",data.restaurants)
      } catch (err) {
        setError(err);
        console.log("erro", err.response.data.message)
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  return [restaurants, loading, error];
};

export const useRequestOrders = (url, initialState) => {

  const { states, setters } =  useContext(GlobalStateContext); 

    const [orders, setOrders] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
  
    useEffect(() => {
      
      const token = states.token

      const fetch = async () => {
        setLoading(true);
        try {
          const { orders } = await axios.get(url,  { headers: {
            'Content-Type': 'application/json',
            auth: token
        }});
          setOrders(orders.data);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      };
      fetch();
    }, []);

    return [orders, loading, error];
    
  };
  