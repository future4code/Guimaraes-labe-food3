import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Arrow from '../../components/Arrow/Arrow';
import Header from '../../components/Header/Header';
import { goToFourFood } from '../../routes/coordinator';
import logo from '../../assets/image_2022-05-13/image.png'
import burger from '../../assets/burgger/burgger.jpg'
import { getRestaurantDetail } from '../../Services/services'
import { CardItemAdd } from '../../components/CardItems/CardItemAdd';
import Footer from '../../components/Footer/Footer';


import {
    RestaurantConteiner,
    RestaurantDetails

} from './styles';

const Restaurants = () => {
    const navigate = useNavigate()

    const [restaurantDetails, loading, error] = getRestaurantDetail([]);

    const showRestaurantDetails =
        restaurantDetails &&
        restaurantDetails.map((item) => {
            return (<>
                <RestaurantDetails>
                    <h2 >{item.category}</h2>
                    <CardItemAdd
                        key={item.id}
                        description={item.description}
                        name={item.name}
                        id={item.id}
                        image={item.photoUrl}
                        price={item.price}
                    />
                </RestaurantDetails>
            </>
            )
        })

    console.log('dados itens restaurant', restaurantDetails)

    return (
        <>
            <RestaurantConteiner>

                <Arrow onClick={() => goToFourFood(navigate)} showTitle={true} title={'Restaurante'} />

                {showRestaurantDetails}

            </RestaurantConteiner>
            <Footer />
        </>
    )
}

export default Restaurants;

