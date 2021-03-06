import React, { FC, memo } from "react"
import { useAppSelector } from "../../redux/hooks"
import { Row } from "react-bootstrap"
import { IPizza } from "../../redux/reducers/pizzaModalSlice"
import Pizza from "./Pizza"

const PizzasList: FC = () => {
  const pizzas = useAppSelector((state) => state.pizzas.pizzas)

  return (
    <section id="pizzas">
      <h2 className="title pt-5 mb-4">Pizzy:</h2>
      <Row>
        {pizzas.map((pizza: IPizza) => (
          <Pizza pizza={pizza} key={pizza._id} />
        ))}
      </Row>
    </section>
  )
}

export default memo(PizzasList)
