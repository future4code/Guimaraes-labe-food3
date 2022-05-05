import React from "react"

import Card from "../../components/Card/Card"
import Filtro from "../../components/Filtro/Filtro"
import Footer from "../../components/Footer/Footer"
import Search from "../../components/Search/Search"

import { 
        FourFoodCardContainer, 
        FourFoodHeader, 
        FourFoodContainer, 
        FourFoodSearch,
        FourFoodFooter
} from './styles'

const FourFood = () => {
    return(<>
        <FourFoodHeader>
            <h5 className="FourFood-header">FourFood</h5>
        </FourFoodHeader>
        
        <FourFoodSearch>
            <Search />
        </FourFoodSearch>
       
        <FourFoodContainer>
            <Filtro />
        </FourFoodContainer>
        
        <FourFoodCardContainer>
            <Card />
            <Card />
            <Card />
            <Card />
        </FourFoodCardContainer>
        <FourFoodFooter>
            <Footer />
        </FourFoodFooter>

        
    </>
    )
}

export default FourFood;