import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getRestaurantDetail } from '../../Services/services';
import CircularProgress from '@material-ui/core/CircularProgress'
import { GlobalStateContext } from '../../Context/GlobalState/GlobalStateContext'
import CardRestaurantDetails from '../../components/CardRestaurant/CardRestaurantDetails';
import { goToFourFood } from "../../routes/coordinator";
import CardRestaurant from '../../components/ResponsiveCard/CardRestaurant';
import CardProductRestaurant from '../../components/ResponsiveCard/CardRestaurant';



import Arrow from '../../components/Arrow/Arrow';
import Header from '../../components/Header/Header';
import { CardItemAdd } from '../../components/CardItems/CardItemAdd'
import Footer from '../../components/Footer/Footer';


import {
  RestaurantConteinerDetails,
  RestaurantContainer,
  FourFoodFooter

} from './styles';

const Restaurants = () => {

  const navigate = useNavigate()
  const param = useParams()
  const { data, loading } = getRestaurantDetail({}, `/restaurants/${param.id}`)
  const { states, setters } = useContext(GlobalStateContext)

  const { cart, restaurant } = states
  const { setCart, setRestaurant } = setters
  const [item, setItem] = useState(0);
  const [popUp, setPopUp] = useState(false);
  const options = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const [open, setOpen] = useState(false)
  const [prod, setProd] = useState({})

  console.log("estados restaurant", restaurant)

  console.log("data", data)

  useEffect(() => {

    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const renderRestaurant = data.restaurant &&
    (
      <RestaurantConteinerDetails>
        <CardRestaurant
         image={data.restaurant.logoUrl}
         name={data.restaurant.name}
         category={data.restaurant.category}
         deliveryTime={data.restaurant.deliveryTime}
         shipping={data.restaurant.shipping}
         address={data.restaurant.address}
        />
      </RestaurantConteinerDetails>
    )

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
        
        <RestaurantConteinerDetails key={category} >
          <h2>{category}</h2>
          {renderProducts(category)}
        </RestaurantConteinerDetails>
      )
    })
  return (<>
<Arrow onClick={()=> goToFourFood(navigate)} showTitle={true} title={'Restaurante'}/>   

    <RestaurantContainer>

    {loading && <CircularProgress />}
    {!loading && renderRestaurant}
    {products}
</RestaurantContainer>
<FourFoodFooter>
            <Footer />
        </FourFoodFooter>
  </>
  )
}
export default Restaurants