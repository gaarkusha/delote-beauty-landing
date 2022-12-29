import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Main from "../main/Main";
import Prices from "../prices/Prices";
import Contacts from "../contacts/Contacts";
import Masters from "../masters/Masters";




const Navigation = () => {
    return(
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/masters" element={<Masters/>}/>
            <Route path="/prices" element={<Prices/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
        </Routes>
    )
}

export default Navigation