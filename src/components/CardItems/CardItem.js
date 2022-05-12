import React, {useState} from "react"

import { CardItemsContainer, Rectangle } from './styles'

import logo from '../../assets/image.jpg'

import { getRestaurantDetail } from '../../Services/services'
import { useParams } from "react-router-dom"

const CardItem = () => {

    const [quantity, setQuantity]  = useState(0)

    const { id } = useParams();

    console.log("res id", id)

    const handleQuantity = () =>{
        setQuantity( quantity +1)
    }

    return(
    <CardItemsContainer className="restaurante-card">   
            <Rectangle>
            <div className="container-image">
            <img src={logo}/> 
            </div>       
            <div className="info-items">
                <span className="title-normal">Bullguer</span>
                <span className="items-bullguer">Pão, carne, queijo, picles e molho</span>
                <span className="price-normal">R$ 20,00</span>       
              <button className="normal-button" onClick={handleQuantity}>adicionar</button>
            </div>
        </Rectangle>
</CardItemsContainer>);
}

export default CardItem;