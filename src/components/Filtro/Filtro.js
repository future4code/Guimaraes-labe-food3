import React  from "react";

import { FiltroContainer } from "./styles";

const Filtro = (props) => {

    const [category, setRestaurants] = props.filter
    
    const filterRestaurant = (cat) =>{
        const updatedList = category.filter((x) => x.category === cat);
        setRestaurants(updatedList)
    }

    const categoryFilter = props.category.map((category, index)=> <ul onClick={()=>filterRestaurant(category)} key={index}><li>{category}</li></ul> )

    return(<FiltroContainer className="filtro">
        {categoryFilter}
    </FiltroContainer>)
}

export default Filtro;