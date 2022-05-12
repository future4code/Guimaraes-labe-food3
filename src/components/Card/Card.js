import React, { useContext } from "react"

import { CardContainer, Rectangle} from './styles'

import logo from '../../assets/image.jpg'

import { goToCart } from '../../routes/coordinator'
import { useNavigate } from "react-router-dom"


const Card = (props) => {
    const navigate = useNavigate();
    
    return(<CardContainer className="restaurante-card">
        <Rectangle>
            <img className="image" src={props.image} onClick={() => goToCart(navigate, props.id) }/> 
            <span className="card-restaturante-text-style-3">{props.name}</span>
            
            <div className="info-entrega">
                    <span className="tempo-de-entrega">Entrega {props.delivery} min</span>
                <span className="taxa-de-entrega">Frete R$ {props.shippingPrice},00</span>
            </div>
        </Rectangle>
    </CardContainer>);
}

export default Card;