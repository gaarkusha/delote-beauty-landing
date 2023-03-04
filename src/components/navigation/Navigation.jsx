import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Main from "../main/Main";
import Prices from "../prices/Prices";
import Contacts from "../contacts/Contacts";
import Masters from "../masters/Masters";
import Cosmetics from "../cosmetics/Cosmetics";
import ProductKevin from "../cosmetics/products/Product1";
import ProductAldo from "../cosmetics/products/Product2";
import ProductAlterna from "../cosmetics/products/Product3";
import ProductOribe from "../cosmetics/products/Product4";




const Navigation = () => {
    return(
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/masters" element={<Masters/>}/>
            <Route path="/prices" element={<Prices/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
            <Route path="/cosmetics" element={<Cosmetics/>}/>
            <Route path="/cosmetics/kevin" element={<ProductKevin/>}/>
            <Route path="/cosmetics/aldo" element={<ProductAldo/>}/>
            <Route path="/cosmetics/alterna" element={<ProductAlterna/>}/>
            <Route path="/cosmetics/oribe" element={<ProductOribe/>}/>

        </Routes>
    )
}

export default Navigation