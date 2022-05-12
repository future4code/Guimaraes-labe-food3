import React, {useState} from "react"

import { 
    CardItemsContainer, 
    Rectangle,
    TotalItens
  } from './styles'

  import { SelectField, MenuItem } from "material-ui"

import logo from '../../assets/image.jpg'

export const CardItemAdd = () => {
    
    const [quantity, setQuantity]  = useState(0)
    const [showPopUp, setShowPopUp] = useState(false);
    const [item , setItem] = useState(0);
    const options = [0,1,2,3,4,5,6,7,8,9,10]

    const handleQuantity = () =>{        
        setShowPopUp(true);
    }


    const onChangeItem = (event) => {
      event.persist();
      setItem(event.target.value)
    }

    const onClickCloseItens = () => {
      setShowPopUp(false)
      setQuantity(item)

      
    const handleQuantity = () =>{
      if (quantity > 0) {
        setQuantity(quantity - 1)
      }
      else{
        alert('Não é possível diminuir a quantidade')
      } 

    }


  return (
    <CardItemsContainer>
       <Rectangle>
            <div className="container-image">
            <img src={logo}/> 
            </div>       
            <div className="info-items">
              { quantity != 0 && <button className="button-quantity">{quantity}</button> }
                <span className="title-normal">Bullguer</span>
                <span className="items-bullguer">Pão, carne, queijo, picles e molho</span>
                <span className="price-add">R$ 20,00</span>       
              <button className="button-add" onClick={handleQuantity}>{quantity != 0? 'remover' : 'adicionar'}</button>
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
}