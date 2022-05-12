import React from 'react'
import { CartContainer, ContainerData } from './styles'
import AddressContent from './AddressContent'
import { CardItemAdd } from '../../components/CardItems/CardItemAdd'
import Footer from '../../components/Footer/Footer'
import { Button } from "@material-ui/core";
import { useParams } from 'react-router-dom'



const Cart = () => {

    const { id } = useParams()

    console.log("Id", id);
    
  return (
    <CartContainer>
      <h3>Meu Carrinho</h3>
      <AddressContent />
      <div>
        Card Infos Restaurante Aqui nesse Espaço
      </div>
      <CardItemAdd />
      <ContainerData>
        <span id="frete-cart">Frete R$ 6,00</span>
        <div id="subtotal">
          <span> SUBTOTAL </span> <span id="price-cart">R$ 67,00</span>
        </div>
        <span> Forma de pagamento </span>
        <div> <hr/></div>
        <form>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
          <label class="form-check-label" for="flexRadioDefault1">
            Dinheiro
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
          <label class="form-check-label" for="flexRadioDefault2">
            Cartão de Crédito
          </label>
        </div>
        <Button
         fullWidth
         variant="text"
         margin="normal"
         style={{ textTransform: 'none' }}  >Confirmar</Button>
        </form>
        <Footer/>
      </ContainerData>
     
    </CartContainer>
  )
}
export default Cart