import React, { FC } from "react"
import { useAppDispatch } from "../../redux/hooks"
import { formatter } from "../../utils/formatter"
import { Col, Button, Card } from "react-bootstrap"
import withStyles, { WithStylesProps } from "react-jss"
import styles from "../../styles/productCard"
import { addProductToCart, CartProduct } from "../../redux/reducers/cartSlice"

export interface IMakaron {
  name: string
  type: string
  image: string
  price: number
}

interface IMakaronProps extends WithStylesProps<typeof styles> {
  makaron: IMakaron
}

const Makaron: FC<IMakaronProps> = ({ classes, makaron }) => {
  const dispatch = useAppDispatch()

  const handleMakaronPick = (makaron: IMakaron) => {
    const newMakaron: CartProduct = {
      name: makaron.name,
      image: makaron.image,
      price: makaron.price,
      productType: makaron.type,
      quantity: 1,
    }
    dispatch(addProductToCart(newMakaron))
  }

  return (
    <Col xs={6} md={4} lg={4} xl={3}>
      <Card className={`mb-3 ${classes.Card}`}>
        <Card.Img variant="top" src={makaron.image} alt={makaron.name} />
        <Card.Body className={classes.CardBody}>
          <Card.Title className={classes.title}>{makaron.name}</Card.Title>
        </Card.Body>
        <Card.Footer>
          <div className={classes.checkout}>
            <p className={classes.checkoutPrice}>
              {formatter.format(makaron.price)}zł
            </p>
            <Button
              variant="outline-secondary"
              onClick={() => handleMakaronPick(makaron)}
              type="button"
              size="sm"
              className={`ml-2 ${classes.pickBtn}`}
            >
              Wybierz
            </Button>
          </div>
        </Card.Footer>
      </Card>
    </Col>
  )
}

export default withStyles(styles)(Makaron)