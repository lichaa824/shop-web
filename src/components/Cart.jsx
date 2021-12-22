import { useState } from "react";
import "../styles/cart.scss";

function Cart() {
  const [active, setActive] = useState(true);

  const toggleClass = () => {
    let state = !active;
    setActive(state);
  };

  return (
    <div onClick={toggleClass}>
      <p>Carrito show up</p>
      <div className={active ? "active" : "non-active"}>
        <p> Soy el carrito</p>
      </div>
    </div>
  );
}

export default Cart;
