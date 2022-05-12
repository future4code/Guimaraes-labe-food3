import React, { useContext, useState } from 'react'
import Card from '../../components/Card/Card'
import Filtro from '../../components/Filtro/Filtro'
import Footer from '../../components/Footer/Footer'
import Search from '../../components/Search/Search'
import { BASE_URL } from '../../constant/urls';
import { getRestaurant } from '../../Services/services'

import { 
        FourFoodCardContainer, 
        FourFoodHeader, 
        FourFoodContainer, 
        FourFoodSearch,
        FourFoodFooter,
        FiltroContainer,

} from './styles'


const FourFood =  () => {

    const [restaurants, loading, error, category, setRestaurants, filter, setFilter] = getRestaurant(`${BASE_URL}/restaurants`, []);

    const cardRestaurant =
    restaurants && 
    restaurants.map((local, index)=>{
        return(
            <Card 
                key={index}
                image={local.logoUrl}
                name={local.name}
                id={local.id}
                delivery={local.deliveryTime}
                shippingPrice={local.shipping}
            />
        )
    })

    return(<>
        <FourFoodHeader>
            <h5 className='FourFood-header'>FourFood</h5>
        </FourFoodHeader>
        
        <FourFoodSearch>
            <Search 
            filter = {[filter, setFilter, setRestaurants]}
            />
        </FourFoodSearch>
       
        <FourFoodContainer>
     <Filtro category={category}
     filter = {[filter, setFilter, setRestaurants]}
     />
        </FourFoodContainer>
        
        <FourFoodCardContainer>
            {cardRestaurant}
        </FourFoodCardContainer>
        <FourFoodFooter>
            <Footer />
        </FourFoodFooter>        
    </>
    )
}

export default FourFood;