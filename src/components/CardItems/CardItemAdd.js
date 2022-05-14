import React, { useState } from "react"
import Card from '@material-ui/core//Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import './styles.css'


export const CardItemAdd = (product) => {

  const [quantity, setQuantity] = useState(0)
  const [showPopUp, setShowPopUp] = useState(false);
  const [item, setItem] = useState(0);
  const options = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const onChangeItem = (event) => {
    event.persist();
    setItem(event.target.value)
  }

  const onClickCloseItens = () => {
    setShowPopUp(false)
    setQuantity(item)

  }

  const handleQuantity = () => {

    if (item) {
      setQuantity(0)
      setItem(0)
    } else {
      setShowPopUp(true)
    }

  }

  console.log("props recebida", product)

  return (

    <>
      <Card className="cardProduct" sx={{ maxWidth: 345, mb: 2 }}>
        <CardMedia
          component="img"
          height="140"
          image={product.product.photoUrl}
          alt="foto produto restaurante"
        />
        <CardContent>
          <Typography className=" nameProduct" gutterBottom variant="h5" component="div">
            {product.product.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {product.product.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button  size="small">R$ {Number(product.product.price).toFixed(2)}</Button>
          <Button variant="outlined" size="small">Adicionar</Button>
        </CardActions>
      </Card>
    </>


  )
}