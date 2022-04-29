import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Arrow from "../../components/Arrow/Arrow";
import Header from "../../components/Header/Header";
import AddressForm from "./AddressForm";


import { AddressContainer } from './styles'

const Address = () => {
    return(<AddressContainer>
            <Arrow />
            <Header />
            <AddressForm />
    </AddressContainer>)
}

export default Address;