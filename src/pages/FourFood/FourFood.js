import React, { useContext } from 'react'
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
        FourFoodFooter
} from './styles'


const FourFood =  () => {

    const [restaurants, loading, error] = getRestaurant(`${BASE_URL}/restaurants`, []);

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

 console.log('restaurantes', restaurants)

    return(<>
        <FourFoodHeader>
            <h5 className='FourFood-header'>FourFood</h5>
        </FourFoodHeader>
        
        <FourFoodSearch>
            <Search />
        </FourFoodSearch>
       
        <FourFoodContainer>
            <Filtro />
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