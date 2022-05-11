import React, { useState } from "react";

import {GlobalStateContext} from './GlobalStateContext';

const GlobalState = (props) => {

    const [infoUser, setInfoUser]= useState({})
    const [hasAddress, setHasAddress] = useState(false)
    const [restaurant, setRestaurant] = useState([])
    const [token, setToken] = useState()

    

    const states = { infoUser, hasAddress, restaurant, token }
    const setters = { setInfoUser, setHasAddress, setRestaurant,setToken }

return(
    <GlobalStateContext.Provider value={{ states, setters }}>
        {props.children}
    </GlobalStateContext.Provider>)
}

export default GlobalState;