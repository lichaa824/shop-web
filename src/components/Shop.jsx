import Mouses from "./Mouses";
import Cart from "./Cart";
import "../styles/shop.scss";
import { useState } from "react";

function Shop() {
  const [currentShop, setCurrentShop] = useState([]);



  function itemAlready(item, arr) {
    let check = arr.filter((e) => (e.name === item.name) === true);
    return check.length > 0;
  }

  function indexOfObj(item, arr) {
    let check = arr.map((e) => e.name === item.name);
    return check.indexOf(true);
  }

  function updateShopArray(obj) {
    let newShop = currentShop.slice();
    let formatted = { name: obj.name, price: obj.price, cant: 1 };
    if (itemAlready(formatted, newShop)) {
      newShop[indexOfObj(formatted, newShop)].cant += 1;
      setCurrentShop(newShop);
    } else {
      newShop.push(formatted);
      setCurrentShop(newShop);
    }
  };


  return (
    <div className="shop-container">
      <Cart itemsBought={currentShop} />
      <Mouses indexOfObj={indexOfObj} currentShop={currentShop} setter={updateShopArray} />
    </div>
  );
}

export default Shop;
