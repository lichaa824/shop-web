import Mouses from "./Mouses";
import Cart from "./Cart";
import "../styles/shop.scss";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

function Shop(props) {
  const [currentShop, setCurrentShop] = useState([]);

  const { saveToShopVault, shopVault } = props;

  useEffect(() =>{
    setCurrentShop(shopVault);
  },[shopVault]);

  function itemAlready(item, arr) {
    let check = arr.filter((e) => (e.name === item.name) === true);
    return check.length > 0;
  }

  function indexOfObj(item, arr) {
    let check = arr.map((e) => e.name === item.name);
    return check.indexOf(true);
  }

  function adder(obj) {
    let newShop = currentShop.slice();
    let formatted = { name: obj.name, price: obj.price, cant: 1 };
    if (itemAlready(formatted, newShop)) {
      newShop[indexOfObj(formatted, newShop)].cant += 1;
    } else {
      newShop.push(formatted);
    }
    setCurrentShop(newShop);
    saveToShopVault(newShop);
  }

  function remover(obj) {
    let newShop = currentShop.slice();
    if (itemAlready({ name: obj.name }, newShop)) {
      newShop[indexOfObj({ name: obj.name }, newShop)].cant -= 1;
      if (newShop[indexOfObj({ name: obj.name }, newShop)].cant === 0) {
        newShop.splice(indexOfObj({ name: obj.name }, newShop), 1);
      }
      setCurrentShop(newShop);
      saveToShopVault(newShop);
    }
  }

  return (
    <div className="shop">
      <Cart itemsBought={currentShop} />
      <div className="shop-container">
        <Mouses
          indexOfObj={indexOfObj}
          currentShop={currentShop}
          adder={adder}
          remover={remover}
        />
      </div>
    </div>
  );
}

export default Shop;
