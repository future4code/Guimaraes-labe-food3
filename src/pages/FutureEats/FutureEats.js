import React from "react"

import Card from "../../components/Card/Card"
import Filtro from "../../components/Filtro/Filtro"

import { FutureEatsCardContainer, FutureEatsContainer } from './styles'

const FutureEats = () => {
    return(<>
        <FutureEatsContainer>
            <h5 className="futureeats-header">FutureEats</h5>
        </FutureEatsContainer>      
        <Filtro />
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