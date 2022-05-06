import React, { useState } from "react";

import {GlobalStateContext} from './GlobalStateContext';

const GlobalState = (props) => {

    const [infoUser, setInfoUser]= useState('')
    const [hasAddress, setHasAddress] = useState(false)

    const states = { infoUser, hasAddress }
    const setters = { setInfoUser, setHasAddress }

return(
    <GlobalStateContext.Provider value={{ states, setters }}>
        {props.children}
    </GlobalStateContext.Provider>)
}

export default GlobalState;