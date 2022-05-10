import React, { useState } from "react";

import {GlobalStateContext} from './GlobalStateContext';

const GlobalState = (props) => {

    const [infoUser, setInfoUser]= useState({})
    const [hasAddress, setHasAddress] = useState(false)
    const [tokenUser, setTokenUser] = useState({})
    const [restaurant, setRestaurant] = useState([])
    

    const states = { infoUser, hasAddress,tokenUser, restaurant }
    const setters = { setInfoUser, setHasAddress,setTokenUser, setRestaurant }

return(
    <GlobalStateContext.Provider value={{ states, setters }}>
        {props.children}
    </GlobalStateContext.Provider>)
}

export default GlobalState;