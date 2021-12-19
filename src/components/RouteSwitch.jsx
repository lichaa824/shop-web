import { useState } from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Home from "./Home"
import Nav from "./Nav";
import Shop from "./Shop";


function RouteSwitch(){
    const [shopVault, setShopVault] = useState([]);

    function saveToShopVault(currentShopVault){
        let current = currentShopVault.slice();
        setShopVault(current)
    };

    return(
        <BrowserRouter>
        <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop saveToShopVault={saveToShopVault} shopVault={shopVault} />}/>
            </Routes>
        </BrowserRouter>
    )
};

export default RouteSwitch;