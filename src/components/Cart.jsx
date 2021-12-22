import { useState } from "react";
import "../styles/cart.scss";
import { BsCart } from "react-icons/bs";

function Cart(props) {
  const [active, setActive] = useState(false);

  const toggleClass = () => {
    let state = !active;
    setActive(state);
  };

  const template = (mouse) => {
    return (
      <div key={mouse.name} className="cart-items">
        <p className="mouse-head"> {mouse.name} </p>
        <p> {mouse.cant} </p>
        <p> {mouse.price}</p>
      </div>
    );
  };

  return (
    <div>
      <div onClick={toggleClass} className="cart-icon grow">
        {" "}
        <BsCart className="icon" />
      </div>

      <div className={active ? "cart-div active" : "cart-div non-active"}>
        <div className="cart-items">
          <p className="mouse-head">Mouse</p> <p>Quantity</p> <p>Price</p>
        </div>
        {props.itemsBought.map((mouse) => template(mouse))}
        <h3 className="subtotal">
          Subtotal:
          {props.itemsBought.length > 0
            ? "  " +
              props.itemsBought
                .map((mouse) => mouse.price * mouse.cant)
                .reduce((prevValue, currentValue) => prevValue + currentValue)
            : ""}
        </h3>
      </div>
    </div>
  );
}

export default Cart;
