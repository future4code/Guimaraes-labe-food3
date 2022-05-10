import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constant/urls";

 const token = localStorage.getItem("token");


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
            return data;
        })
}

export const useRequestOrders = (url, initialState) => {
    const [orders, setOrders] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
  
    useEffect(() => {
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
  