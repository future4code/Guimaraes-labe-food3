import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getRestaurantDetail } from '../../Services/services';
import CircularProgress from '@material-ui/core/CircularProgress'
import { GlobalStateContext } from '../../Context/GlobalState/GlobalStateContext'
import CardRestaurantDetails from '../../components/CardRestaurant/CardRestaurantDetails';



import Arrow from '../../components/Arrow/Arrow';
import Header from '../../components/Header/Header';
import { goToFourFood } from '../../routes/coordinator';
import { CardItemAdd } from '../../components/CardItems/CardItemAdd'
import Footer from '../../components/Footer/Footer';


import {
  RestaurantConteiner,
  CardContainer,
  Rectangle,
  FourFoodFooter,
  RestaurantConteinerDetails

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

  useEffect(() => {

    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])


  const renderRestaurant = data.restaurant &&
    (
      <RestaurantConteinerDetails>
        <CardRestaurantDetails
          image={data.restaurant.logoUrl}
          name={data.restaurant.name}
          category={data.restaurant.category}
          deliveryTime={data.restaurant.deliveryTime}
          shipping={data.restaurant.shipping}
          address={data.restaurant.address}
        />
      </RestaurantConteinerDetails>
    )

  return (<>
    <Arrow />
    {loading && <CircularProgress />}
    {renderRestaurant}

  </>
  )
}
export default Restaurants