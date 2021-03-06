import React, { FC, useEffect } from "react"
import { HashRouter } from "react-router-dom"
import { useAppDispatch } from "../redux/hooks"
import { fetchPromos } from "../redux/reducers/promoSlice"
import {
  fetchPizzas,
  fetchPizzaIngredients,
} from "../redux/reducers/pizzasSlice"
import { fetchLunches } from "../redux/reducers/lunchSlice"
import { fetchCart } from "../redux/reducers/cartSlice"
import Routes from "./Routes"
import { Container } from "react-bootstrap"
import "../styles/App.css"

const App: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchPromos())
    dispatch(fetchPizzas())
    dispatch(fetchLunches())
    dispatch(fetchPizzaIngredients())
    dispatch(fetchCart())
  }, [])

  return (
    <div className="App" id="home">
      <Container fluid="lg">
        <HashRouter>
          <Routes />
        </HashRouter>
      </Container>
    </div>
  )
}

export default App
