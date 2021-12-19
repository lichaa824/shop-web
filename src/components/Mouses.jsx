
import "../styles/mouses.scss";

const mousesList = [
  { name: "razer_deathadder", price: 35, img: ""},
  { name: "logitech_g203", price: 50, img: "" },
  { name: "logitech_gpro_wireless", price: 73, img: "" },
  { name: "razer_basilik_v3", price: 70, img: "" },
  { name: "razer_naga", price: 64, img: "" },
  { name: "steelseries_sensei_310", price: 38, img: "" },
  { name: "steelseries_prime_wireless", price: 90, img: "" },
];

function formatName(name) {
  let str = name.split("_");
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].substr(1);
  }

  return str.join(" ");
}

function getItemImg(item) {
  let img = require(`../imgs/${item}.webp`);
  return img;
}

function getMouseInfoFormatted(mouse) {
  let mouseName = "";
  let mousePrice = 0;
  let mouseImg = "";

  mouseName = formatName(mouse.name);
  mousePrice = mouse.price;
  mouseImg = getItemImg(mouse.name);
  return { name: mouseName, price: mousePrice, img: mouseImg };
}

function Mouses(props) {

  const cant = (obj) => {
    return props.indexOfObj(obj,props.currentShop) > -1 ? props.currentShop[props.indexOfObj(obj,props.currentShop)].cant : ''
  };

  const template = (obj) => {
    return (
      <div className="item-container" key={obj.name}>
        <h3>{obj.name}</h3>
        <div className="img-container">
          <img className="img" src={obj.img} alt="" />
        </div>
        <h2>Price {obj.price}</h2>
        <button onClick={() => props.setter(obj)}>Add to cart</button>
        <h2> {cant(obj)} </h2>
      </div>
    );
  };

  return mousesList.map((mouse) => template(getMouseInfoFormatted(mouse)));
}

export default Mouses;
