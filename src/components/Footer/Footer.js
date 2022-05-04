import React from "react";

import { Home, ShoppingCart, PermIdentity } from "@material-ui/icons";

import { FooterContainer } from './styled'

const Footer = () => {
    return(<FooterContainer className="footer-container">
        <Home />
        <ShoppingCart /> 
        <PermIdentity />
    </FooterContainer>)
}   

export default Footer;