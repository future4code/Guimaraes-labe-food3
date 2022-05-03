import React from "react"

import Card from "../../components/Card/Card"
import Filtro from "../../components/Filtro/Filtro"

import { FutureEatsCardContainer, FutureEatsHeader, FutureEatsContainer } from './styles'

const FutureEats = () => {
    return(<>
        <FutureEatsHeader>
            <h5 className="futureeats-header">FutureEats</h5>
        </FutureEatsHeader>
        
        <FutureEatsContainer>
            <Filtro />
        </FutureEatsContainer>
        
        <FutureEatsCardContainer>
            <Card />
            <Card />
            <Card />
            <Card />
        </FutureEatsCardContainer>
    </>
    )
}

export default FutureEats;