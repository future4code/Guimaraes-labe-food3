import React from "react"

import Card from "../../components/Card/Card"
import Filtro from "../../components/Filtro/Filtro"
import Footer from "../../components/Footer/Footer"
import Search from "../../components/Search/Search"

import { 
        FutureEatsCardContainer, 
        FutureEatsHeader, 
        FutureEatsContainer, 
        FutureEatsSearch,
        FutureEatsFooter
} from './styles'

const FutureEats = () => {
    return(<>
        <FutureEatsHeader>
            <h5 className="futureeats-header">FutureEats</h5>
        </FutureEatsHeader>
        
        <FutureEatsSearch>
            <Search />
        </FutureEatsSearch>
       
        <FutureEatsContainer>
            <Filtro />
        </FutureEatsContainer>
        
        <FutureEatsCardContainer>
            <Card />
            <Card />
            <Card />
            <Card />
        </FutureEatsCardContainer>
        <FutureEatsFooter>
            <Footer />
        </FutureEatsFooter>

        
    </>
    )
}

export default FutureEats;