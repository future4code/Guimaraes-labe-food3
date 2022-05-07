import React from "react";
import { Home, ShoppingCart, PermIdentity } from "@material-ui/icons";
import { FooterContainer } from './styled'
import { useNavigate } from 'react-router-dom';
import { goToFourFood } from '../../routes/coordinator';
import {goToProfile} from '../../routes/coordinator';
import { goToCart } from "../../routes/coordinator";


const Footer = () => {

    const navigate = useNavigate();

    return(<FooterContainer className="footer-container">
        <Home onClick={()=>goToFourFood(navigate)}/>
        <ShoppingCart onClick={()=> goToCart(navigate)} /> 
        <PermIdentity onClick={()=> goToProfile(navigate)}/>
    </FooterContainer>)
}   

export default Footer;