import React, {useState} from "react"

import { CardItemsContainer, Rectangle } from './styles'

import logo from '../../assets/image.jpg'

export const CardItemAdd = () => {
    
    const [quantity, setQuantity]  = useState(0)

    const handleQuantity = () =>{
        setQuantity( quantity +1)
    }

  return (
    <CardItemsContainer>
       <Rectangle>
            <div className="container-image">
            <img src={logo}/> 
            </div>       
            <div className="info-items">
            <button className="button-quantity">{quantity}</button>
                <span className="title-normal">Bullguer</span>
                <span className="items-bullguer">Pão, carne, queijo, picles e molho</span>
                <span className="price-add">R$ 20,00</span>       
              <button className="button-add" onClick={handleQuantity}>remover</button>
            </div>
        </Rectangle>
        </CardItemsContainer>
  )
}
