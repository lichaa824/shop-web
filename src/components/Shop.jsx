import getItemObject from "./getItemsInfo";
import useMouseInfo from "./getItemsInfo";

const mousesArray = ["razer_deathadder", "logitech_g203"];

function Mouse(name) {
  let obj = useMouseInfo(name);
  return (
    <div key={obj.name}>
      <h3>{obj.name}</h3>
      <img src={obj.img} alt="" />
      <h3>{obj.price} </h3>
    </div>
  );
}

function List() {
  return <div>{mousesArray.map((e) => Mouse(e))}</div>;
}

function Shop() {

  return <List />
}

export default Shop;
