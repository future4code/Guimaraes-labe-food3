import React from "react"

import { CardItemsContainer, Rectangle } from './styles'

import logo from '../../assets/image.jpg'

const CardItems = () => {
    return(<CardItemsContainer className="restaurante-card">
    <Rectangle>
        <div className="container-image">
        <img src={logo}/> 
        </div>       
        <div className="info-items">
            <button className="button-quantity">1</button>
            <span className="title-item">Bullguer</span>
            <span className="items-bullguer">Pão, carne, queijo, picles e molho</span>
            <span className="price">R$ 20,00</span>   
            <button>Adicionar</button>
        </div>
     
    </Rectangle>
</CardItemsContainer>);
}

export default CardItems;