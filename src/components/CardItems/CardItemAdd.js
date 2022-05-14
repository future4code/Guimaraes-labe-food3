import React, {useState} from "react"

import { 
    CardItemsContainer, 
    Rectangle,
    TotalItens
  } from './styles'


export const CardItemAdd = (props) => {
    
    const [quantity, setQuantity]  = useState(0)
    const [showPopUp, setShowPopUp] = useState(false);
    const [item , setItem] = useState(0);
    const options = [0,1,2,3,4,5,6,7,8,9,10]


    const { cart, restaurant } = props.statesRestaurants.states
    const {setCart ,setRestaurant} = props.statesRestaurants.setters


    const onChangeItem = (event) => {
      event.persist();
      setItem(event.target.value)
      console.log('clicou no botao onChangeItem ')
    }

    const onClickCloseItens = () => {
      setShowPopUp(false)
      setQuantity(item)
      console.log('clicou no botao onClickCloseItens')

    }

    const handleQuantity = () =>{
      console.log('clicou no botao handleQuantity')
      if(item > 0){
        setQuantity(0)
        setItem(0)
      }else{
        setShowPopUp(true)
      }
      
    }

  return (
    <CardItemsContainer>
       <Rectangle>
            <div className="container-image">
            <img src={props.product.photoUrl} /> 
            </div>       
            <div className="info-items">
              { quantity != 0 && <button className="button-quantity">{quantity}</button> }
           <span className="title-normal">{props.product.name}</span>
                <span className="description">{props.product.description}</span>
                <span className="price-add">R$ {Number(props.product.price).toFixed(2)}</span>      
              <button className="button-add" onClick={() => handleQuantity()}>{quantity != 0? 'remover' : 'adicionar'}</button>
            </div>
        </Rectangle>

        {showPopUp && 
         <TotalItens>
         <span>Selecione a quantidade desejada</span>

         <div className="select-itens">
           <select
             onChange={(event)=>onChangeItem(event)} value={item}
           >
             {options.map((item, index)=>{
               return (<option key={index} value={item}>{item}</option>)
             })}
           </select>
         </div>

         <span className="add-itens-card" onClick={() => onClickCloseItens() }>ADICIONAR AO CARRINHO</span>

      </TotalItens>
      }
     
      </CardItemsContainer>
  )
}