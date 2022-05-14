import React, { useState, useContext, useEffect } from 'react'
import Card from '../../components/Card/Card'
import Filtro from '../../components/Filtro/Filtro'
import Footer from '../../components/Footer/Footer'
import Search from '../../components/Search/Search'
import { BASE_URL } from '../../constant/urls';
import { getActiveOrder, getRestaurant } from '../../Services/services'
import CircularProgress from '@material-ui/core/CircularProgress'


import {
    FourFoodCardContainer,
    FourFoodHeader,
    FourFoodSearch,
    FourFoodFooter,

} from './styles'
import { ActiveOrder } from '../../components/ActiveOrder/ActiveOrder'

const FourFood = () => {

    const [restaurants, loading, error, category, setRestaurants, filter, setFilter] = getRestaurant(`${BASE_URL}/restaurants`, []);
    const [input, setInput] = useState("")


    const onChangeInput = (ev) => {
        setInput(ev.target.value)
    }

    const showRestaurant =
        restaurants &&
        restaurants.filter(rest => {
            return rest.name.toLowerCase().includes(input.toLowerCase())
        })
            .map((rest, index) => {
                return (<div  key={index}>
                    <Filtro
                    category={category}
                    filter={[filter, setFilter, setRestaurants]}
                    />
                    <Card
                    image={rest.logoUrl}
                    name={rest.name}
                    id={rest.id}
                    delivery={rest.deliveryTime}
                    shippingPrice={rest.shipping}
                    />
                </div>
                )
            })

    return (<>
        <FourFoodHeader>
            <h5 className='FourFood-header'>FourFood</h5>
        </FourFoodHeader>

        <FourFoodSearch>
            <Search
                input={input}
                onChangeInput={onChangeInput}
            />
        </FourFoodSearch>

        <FourFoodCardContainer>

            <>
                {loading && <CircularProgress />}
                {!loading && restaurants && restaurants.length > 0 && showRestaurant}
                {!loading && restaurants && restaurants.length === 0 && (
                    <h2> Não Há Restaurantes na Lista</h2>
                )}
            </>

        </FourFoodCardContainer>
        <FourFoodFooter>
            <Footer />
        </FourFoodFooter>
        {getActiveOrder? <ActiveOrder/>: ''}
    </>
    )
}

export default FourFood;
