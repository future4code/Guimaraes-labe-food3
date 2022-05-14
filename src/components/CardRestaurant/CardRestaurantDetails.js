import React from "react";
import {
	Address,
  Category,
  Container,
  ContainerDetails,
  ContainerNumb,
  Img,
  Name
}  from './style'

const CardRestaurantDetails = ({
  image,
  name,
  category,
  deliveryTime,
  shipping,
  address,
}) => {
  return (
    <div>
      <ContainerDetails>
       <Img src={image} alt="Logo Restaurante" />
        <Container>
          <Name>{name}</Name>
          <Category>{category}</Category>
          <ContainerNumb>
       
              <p>
                {Math.floor(deliveryTime * 0.9)} - {deliveryTime} min
              </p>
	      <p>
              Frete R$
              {Number(shipping).toFixed(2)}
	      </p>
          </ContainerNumb>
          <Address>{address}</Address>
        </Container> 
      </ContainerDetails>
    </div>
  );
};

export default CardRestaurantDetails
