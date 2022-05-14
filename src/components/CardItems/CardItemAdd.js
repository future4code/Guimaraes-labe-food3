import React, {useState} from "react"

import { 
    CardItemsContainer, 
    Rectangle,
    TotalItens
  } from './styles'


export const CardItemAdd = (product) => {
    
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

      if(item){
        setQuantity(0)
        setItem(0)
      }else{
        setShowPopUp(true)
      }
      
    }

console.log("props recebida", product )

  return (
    <CardItemsContainer>
       <Rectangle>
            <div className="container-image">
            <img src={product.product.photoUrl} /> 
            </div>       
            <div className="info-items">
              { quantity != 0 && <button className="button-quantity">{quantity}</button> }
           <span className="title-normal">{product.product.name}</span>
                <span className="description">{product.product.description}</span>
                <span className="price-add">R$ {Number(product.product.price).toFixed(2)}</span>      
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