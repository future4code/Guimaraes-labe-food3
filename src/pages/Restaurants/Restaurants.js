import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Arrow from "../../components/Arrow/Arrow";
import Header from "../../components/Header/Header";
import { goToFourFood } from "../../routes/coordinator";
import logo from '../../assets/image_2022-05-13/image.png'
import burger from '../../assets/burgger/burgger.jpg'
import { CardItemAdd } from '../../components/CardItems/CardItemAdd'
import { getRestaurantDetail } from "../../Services/services";
import CircularProgress from '@material-ui/core/CircularProgress'
import Footer from "../../components/Footer/Footer";

import {
  RestaurantConteiner,
  CardContainer,
  Rectangle,
  FourFoodFooter,

} from "./styles";

const Restaurants = () => {
  const navegate = useNavigate()

  const param = useParams()
  const { data, loading } = getRestaurantDetail({}, `/restaurants/${param.id}`)


  console.log('data recebido', data)

  const renderRestaurant = data.restaurant && (
    <CardContainer className="restaurante-card">
      <Rectangle>
        <img className="image" src={data.restaurant.logoUrl} />
        <span className="card-restaturante-text-style-3">{data.restaurant.name}</span>
        <span className="description"> {data.restaurant.category}</span>
        <div className="info-entrega">
          <span className="description">Entrega  {Math.floor(data.restaurant.deliveryTime * 0.9)} - {data.restaurant.deliveryTime} min</span>
          <span className="taxa-de-entrega">Frete R$ {Number(data.restaurant.shipping).toFixed(2)}</span>
          <span className="description">{data.restaurant.address}</span>
        </div>
      </Rectangle>
    </CardContainer>)

const renderProducts = (category) => {
  return data.restaurant && data.restaurant.products.map((product) => {
    if (product.category === category) {
      return (
        <CardItemAdd
          key={product.id}
          product={product}
          quantity={product.quantity}
        />
      )
    }
  })
}

const categoriesList = data.restaurant && data.restaurant.products.map((product) => {
  return product.category
})

const products = [...new Set(categoriesList)].map((category) => {
  return (
    
    <CardContainer key={category} >
      <h2>{category}</h2>
      {renderProducts(category)}
    </CardContainer>
  )
})


  return (
  <>
      <RestaurantConteiner>
      <Arrow onClick={()=> goToFourFood(navegate)} showTitle={true} title={'Restaurante'}/>   

    {loading && <CircularProgress />}
    {!loading && renderRestaurant}
    {products}
  
  </RestaurantConteiner>
  <FourFoodFooter>
            <Footer />
        </FourFoodFooter>
  </>

  )
}

export default Restaurants;

