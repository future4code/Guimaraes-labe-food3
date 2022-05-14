import React, {useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constant/urls";
import {GlobalOrderContext} from './GlobalOrderContext'

const GlobalOrder = (props) => {

  const [activeOrder, setActiveOrder] = useState({});

  const getActiveOrder = () => {
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
  };

  return (
    <GlobalOrderContext.Provider
      value={{
        activeOrder,
        getActiveOrder,
      }}
    >
      {props.children}
    </GlobalOrderContext.Provider>
  )
}

export default GlobalOrder