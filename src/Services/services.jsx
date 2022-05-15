import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { GlobalStateContext } from  '../Context/GlobalState/GlobalStateContext'
import { BASE_URL } from "../constant/urls";


export const getRestaurant = (url, initialState) => {
  const [restaurants, setRestaurants] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [category, setCategory] = useState([])
  const [filter, setFilter] = useState(restaurants)


  useEffect(() => {

    const token = localStorage.getItem('token')

    const fetch = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(url, {
          headers: {
            'Content-Type': 'application/json',
            auth: token
          }
        });
        const newArrayCategory = []

        for (let restaurant of data.restaurants) {
          const newCategory = restaurant.category
          newArrayCategory.push(newCategory)
        }
        setRestaurants(data.restaurants)
        setFilter(data.restaurants)
        setCategory(newArrayCategory)

      } catch (err) {
        setError(err);
        window.alert('Erro', err.response.data.message)
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  return [restaurants, loading, error, category, setRestaurants, filter, setFilter];
};

export const useRequestOrders = (url, initialState) => {


  const [orders, setOrders] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {

    const token = localStorage.getItem('token')

    const fetch = async () => {
      setLoading(true);
      try {
        const { orders } = await axios.get(url, {
          headers: {
            'Content-Type': 'application/json',
            auth: token
          }
        });
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


export const getRestaurantDetail = (initialState, path) => {

  const [data, setData] = useState(initialState);

  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const token = localStorage.getItem('token')

    const fetch = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`${BASE_URL}${path}`, {
          headers: {
            'Content-Type': 'application/json',
            auth: token
          }
        });
        setData(data);
          setLoading(false);
      } catch (err) {
        window.alert('Erro', err.response.data.message)
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [path]);

return { data, loading };
};

export const getActiveOrder = () => {

  const [activeOrder, setActiveOrder] = useState({});

  axios
    .get(`${BASE_URL}/active-order`, {
      headers: {
        auth: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      setActiveOrder(res.data);
    })
    .catch((err) => {
      window.alert("Erro ao realizar solicitação.\n Tente novamente.");
    });
    return  [activeOrder, setActiveOrder] 
};