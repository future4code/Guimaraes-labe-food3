import React, { useState } from "react";

import {GlobalStateContext} from './GlobalStateContext';

const GlobalState = (props) => {

    const [infoUser, setInfoUser]= useState({})
    const [hasAddress, setHasAddress] = useState(false)
    const [restaurant, setRestaurant] = useState([])
    const [product, setProduct] = useState([])
    const [restaurantDetail, setRestaurantDetail] = useState({})

    const states = { infoUser, hasAddress, restaurant, product, restaurantDetail}
    const setters = { setInfoUser, setHasAddress, setRestaurant, setProduct, setRestaurantDetail}

return(
    <GlobalStateContext.Provider value={{ states, setters }}>
        {props.children}
    </GlobalStateContext.Provider>)
}

export default GlobalState;