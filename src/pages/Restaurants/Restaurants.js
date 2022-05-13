import React from "react";
import { useNavigate } from "react-router-dom";
import Arrow from "../../components/Arrow/Arrow";
import Header from "../../components/Header/Header";
import { goToFourFood } from "../../routes/coordinator";
import logo  from '../../assets/image_2022-05-13/image.png'
import burger  from '../../assets/burgger/burgger.jpg'


import { 
    RestaurantConteiner,
    RestaurantDetails

} from "./styles";

const Restaurants = () => { 
    const navegate = useNavigate()

    return(<RestaurantConteiner>
        <Arrow onClick={()=> goToFourFood(navegate)} showTitle={true} title={'Restaurante'}/>       
        
        <RestaurantDetails>
            <img className="restaurante-logo" src={logo} />
            <div className="restaurante-text">
                <span>Bullquer vila Madalena</span>                
            </div>

            <div className="restaurante-buger">
                <span>Burger</span>                
            </div>

            <div className="restaurante-min-frete">
                <span className="restaurante-tempo-entrega">50 - 60 min</span>
                <span className="restaurante-frete">Frete R$ 6,00</span>
            </div>

            <div className="restaurante-address">
                <span>R. Fradique Coutinho, 1136 - Vila Madalena</span>                
            </div>
            
            <span className="restaurante-principais">Principais</span>
            
            <div className="restaurante-item-card">
                <div className="item-card">
                    <img className="item-card-img" src={burger}/>
                    
                    <div className="item-card-info">

                        <div className="item-card-name">
                            <span>Bullger</span>    
                        </div>  

                        <div className="item-card-description">
                            <span>Pão, carne. queijo, picles e molho.</span>    
                        </div>   

                        <div className="item-card-value">
                            <span>R$ 20,00</span>    
                        </div> 

                        <div className="item-card-button">
                            <span>adicionar</span>    
                        </div> 

                    </div>
                </div>
            </div>
        </RestaurantDetails>

    </RestaurantConteiner>
    )
}

export default Restaurants;

