import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { GlobalStateContext } from '../Context/GlobalStateContext';
import { useParams } from 'react-router-dom'


export const getRestaurant = (url, initialState) => {
  const [restaurants, setRestaurants] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [category, setCategory] = useState([])
  const [filter, setFilter] = useState(restaurants)

  const { states, setters } = useContext(GlobalStateContext);
/* console.log('lista restaurantes', restaurants) */
  const token = states.infoUser.token

  useEffect(() => {

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
/*         console.log('Erro', err.response.data.message) */
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

  const { states, setters } = useContext(GlobalStateContext);

  const [orders, setOrders] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {

    const token = states.token

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




export const getRestaurantDetail = (initialState) => {

  
  const { id } = useParams();

  const { states, setters } = useContext(GlobalStateContext);

  const [restaurantDetails, setRestaurantDetails] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  
  useEffect(() => {

    const token = states.infoUser.token

    const fetch = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/restaurants/${id}`, {
          headers: {
            'Content-Type': 'application/json',
            auth: token
          }
        });
        console.log('lista de produtos',data.restaurant.products)
        setRestaurantDetails(data.restaurant.products); 
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  return [restaurantDetails, loading, error];

};
