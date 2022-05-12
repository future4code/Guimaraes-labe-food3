import React, { useContext } from "react"

import { CardContainer, Rectangle} from './styles'

import logo from '../../assets/image.jpg'


const Card = (props) => {


    return(<CardContainer className="restaurante-card">
        <Rectangle>
            <img className="image" src={props.image}/> 
            <span className="card-restaturante-text-style-3">{props.name}</span>
            
            <div className="info-entrega">
                    <span className="tempo-de-entrega">Entrega {props.delivery} min</span>
                <span className="taxa-de-entrega">Frete R$ {props.shippingPrice},00</span>
            </div>
        </Rectangle>
    </CardContainer>);
}

export default Card;