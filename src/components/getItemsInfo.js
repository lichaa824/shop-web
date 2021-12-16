import { useState, useEffect } from "react";

const mouses = [
    { name: "razer_deathadder", price: 100, img: "" },
    { name: "logitech_g203", price: 150, img: "" },
  ];


const useMouseInfo = (name) => {
  const [mousePrice, setMousePrice] = useState("");
  const [mouseName, setMouseName] = useState("");
  const [mouseImg, setMouseImg] = useState("");


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

  useEffect(() => {
    setMouseName(formatName(name));
    setMouseImg(getItemImg(name));
    setMousePrice(mouses[mouses.findIndex((x) => x.name === name)].price)
    
  },[name]);
  return {name:mouseName,price:mousePrice,img:mouseImg};
};

export default useMouseInfo;


