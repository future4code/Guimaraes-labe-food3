import React, { useState } from "react";

import {GlobalStateContext} from './GlobalStateContext';

const GlobalState = (props) => {

    const [infoUser, setInfoUser]= useState({})
    const [hasAddress, setHasAddress] = useState(false)
    const [restaurant, setRestaurant] = useState([])
    const [product, setProduct] = useState([])
    const [restaurantDetail, setRestaurantDetail] = useState({})
    const [cart, setCart] = useState(
        JSON.parse(localStorage.getItem("cart"))
          ? JSON.parse(localStorage.getItem("cart"))
          : []
      );
      const [dataRestaurant, setDataRestaurant] = useState(
        JSON.parse(localStorage.getItem("restaurant"))
          ? JSON.parse(localStorage.getItem("restaurant"))
          : {}
      );

    const states = { infoUser, hasAddress, restaurant, product, restaurantDetail, cart, dataRestaurant}
    const setters = { setInfoUser, setHasAddress, setRestaurant, setProduct, setRestaurantDetail, setCart, setDataRestaurant}

return(
    <GlobalStateContext.Provider value={{ states, setters }}>
        {props.children}
    </GlobalStateContext.Provider>)
}

export default GlobalState;