import React from "react";

import Navigation from "./Navigation/Navigation";

import './Header.scss';




const Header = () => {
     return (
       <div className="bg">
         <div className="container">
         <Navigation />
         </div>
       </div>
     );
};

export default Header;