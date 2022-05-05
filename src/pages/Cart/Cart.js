import React from 'react'
import {CartContainer} from "./styles"
import AddressContent from "./AddressContent"
import CardItems from '../../components/CardItems/CardItems'



const Cart = () => {
  return (
    <CartContainer>
      <h3>Meu Carrinho</h3>
     <AddressContent/>
     <CardItems/>
    </CartContainer>
  )
}
export default Cart