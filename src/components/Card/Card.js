import React from "react"

import { CardContainer, Rectangle} from './styles'

import logo from '../../assets/image.jpg'

const Card = () => {
    return(<CardContainer className="restaurante-card">
        <Rectangle>
            <img className="image" src={logo}/> 
            <span className="card-restaturante-text-style-3">Vinil Butantã</span>
            
            <div className="info-entrega">
                <span className="tempo-de-entrega">50-60 min</span>
                <span className="taxa-de-entrega">Frete R$ 6,00</span>
            </div>
        </Rectangle>
    </CardContainer>);
}

export default Card;