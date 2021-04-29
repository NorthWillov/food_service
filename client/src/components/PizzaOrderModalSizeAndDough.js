import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/pizzaOrderModalSizeAndDoughStyles";
import { changePizzaSize, changePizzaDough } from "../redux/pizzaModalActions";

function PizzaOrderModalSizeAndDough(props) {
  const { classes } = props;

  const currPizzaSize = useSelector((state) => state.pizzaModal.currPizzaSize);
  const currPizzaDough = useSelector(
    (state) => state.pizzaModal.currPizzaDough
  );
  const pizzaInModal = useSelector((state) => state.pizzaModal.pizzaInModal);
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <h6>Rozmiar:</h6>
      <div
        className={classes.group}
        onChange={(e) => dispatch(changePizzaSize(e.target.value))}
      >
        <input
          className={classes.input}
          type="radio"
          name="rb-size"
          id="rb1"
          checked={currPizzaSize === "20cm"}
          value="20cm"
          disabled={pizzaInModal?.name === "Calzone (Pierog)"}
          readOnly
        />
        <label className={classes.label} htmlFor="rb1">
          20cm
        </label>
        <input
          className={classes.input}
          type="radio"
          name="rb-size"
          id="rb2"
          value="28cm"
          checked={
            currPizzaSize === "28cm" ||
            pizzaInModal?.name === "Calzone (Pierog)"
          }
          readOnly
        />
        <label className={classes.label} htmlFor="rb2">
          28cm
        </label>
        <input
          className={classes.input}
          type="radio"
          name="rb-size"
          id="rb3"
          value="50cm"
          checked={currPizzaSize === "50cm"}
          disabled={
            currPizzaDough === "grube" ||
            pizzaInModal?.name === "Calzone (Pierog)"
          }
          readOnly
        />
        <label className={classes.label} htmlFor="rb3">
          50cm
        </label>
      </div>
      <h6>Ciasto:</h6>
      <div
        className={classes.group}
        onChange={(e) => dispatch(changePizzaDough(e.target.value))}
      >
        <input
          className={classes.input}
          type="radio"
          name="rb-dough"
          id="rb4"
          value="cieńkie"
          checked={currPizzaDough === "cieńkie"}
          disabled={pizzaInModal?.name === "Calzone (Pierog)"}
          readOnly
        />
        <label className={classes.label} htmlFor="rb4">
          cieńkie
        </label>
        <input
          className={classes.input}
          type="radio"
          name="rb-dough"
          id="rb5"
          value="średnie"
          checked={
            currPizzaDough === "średnie" ||
            pizzaInModal?.name === "Calzone (Pierog)"
          }
          readOnly
        />
        <label className={classes.label} htmlFor="rb5">
          średnie
        </label>
        <input
          className={classes.input}
          type="radio"
          name="rb-dough"
          id="rb6"
          value="grube"
          checked={currPizzaDough === "grube"}
          disabled={
            currPizzaSize === "50cm" ||
            pizzaInModal?.name === "Calzone (Pierog)"
          }
          readOnly
        />
        <label className={classes.label} htmlFor="rb6">
          grube
        </label>
      </div>
    </div>
  );
}

export default withStyles(styles)(PizzaOrderModalSizeAndDough);
