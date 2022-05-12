import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { GlobalStateContext } from "../Context/GlobalStateContext";
import { BASE_URL } from "../constant/urls";


export const getRestaurant = (url, initialState) => {
  const [restaurants, setRestaurants] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [category, setCategory] = useState([])
  const [filter, setFilter] = useState(restaurants)

  const { states, setters } =  useContext(GlobalStateContext); 
console.log("lista de restaurantes", restaurants)

console.log("lista de categorias", category)
  const token = states.infoUser.token

  useEffect(() => {

     const fetch = async () => {
      setLoading(true);
      try {
        const  {data} = await axios.get(url,  { headers: {
          'Content-Type': 'application/json',
          auth: token
      }});

      const newArrayCategory = []

/* for(let restaurant of data.restaurants){
  const newCategory = restaurant.category
  newArrayCategory.push(newCategory)
}  */
for(let restaurant of data.restaurants){
  const newCategory = restaurant.category.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
  newArrayCategory.push(newCategory)
  console.log("categorias sem acentos", newCategory)
} 
setCategory(newArrayCategory)
setRestaurants(data.restaurants) 
setFilter(data.restaurants)

        setCategory(newArrayCategory)

      }catch (err){
        setError(err);
        console.log("erro", err.response.data.message)
      } finally {
        setLoading(false);
      }

    };

    fetch();

  }, []);

  return [restaurants, loading, error, category, setRestaurants, filter, setFilter ];

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



export const getRestaurantDetail = (id) =>{
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState();
    const { states, setters } =  useContext(GlobalStateContext); 

  useEffect(()=>{
      setLoading(true)

      const fetch = async () => {
        try{
          const { response } = await axios.get(`${BASE_URL}/${id}`, { 
            headers: { 
              'Content-Type': 'application/json',
              auth: states.infoUser.token
            }
          })  
          
          console.log("Restaurante", response)
          // setters.setProduct()

        }catch(error){
          setError(error)
        }
      }

    fetch();
      

    },[])
}

