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

    const onChangeItem = (event) => {
      event.persist();
      setItem(event.target.value)
    }

    const onClickCloseItens = () => {
      setShowPopUp(false)
      setQuantity(item)

    }

    const handleQuantity = () =>{
      setShowPopUp(true)
    }


  return (
    <CardItemsContainer>
       <Rectangle>
            <div className="container-image">
            <img src={props.image}/> 
            </div>       
            <div className="info-items">
              { quantity != 0 && <button className="button-quantity">{quantity}</button> }
                <span className="title-normal">{props.name}</span>
                <span className="description">{props.description}</span>
                <span className="price-add">R${props.price}</span>       
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