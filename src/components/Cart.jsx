import { useState } from "react";
import "../styles/cart.scss";
import { BsCart } from "react-icons/bs";

function Cart(props) {
  const [active, setActive] = useState(false);

  const toggleClass = () => {
    let state = !active;
    setActive(state);
  };


  return (
    <div>
      <div onClick={toggleClass} className="cart-icon">
        {" "}
        <BsCart className="icon" />
      </div>

      <div className={active ? "cart-div active" : "cart-div non-active"}>
      <button onClick={()=>console.log(props.itemsBought)}>test</button>
      </div>
    </div>
  );
}

export default Cart;
