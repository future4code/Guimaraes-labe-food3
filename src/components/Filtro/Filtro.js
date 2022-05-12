import React  from "react";

import { FiltroContainer } from "./styles";

const Filtro = (props) => {

    const [filter, setFilter, setRestaurants] = props.filter
    
    const filterRestaurant = (cat) =>{
        const updatedList = filter.filter((x) => x.category === cat);
        setRestaurants(updatedList)
    }

    const category = props.category.map((category, index)=> <ul onClick={()=>filterRestaurant(category)} key={index}><li>{category}</li></ul> )

    return(<FiltroContainer className="filtro">
        {category}
    </FiltroContainer>)
}

export default Filtro;