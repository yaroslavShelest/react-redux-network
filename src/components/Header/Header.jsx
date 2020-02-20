import React from "react";

import NavigationContainer from "./Navigation/NavigationContainer";

import './Header.scss';



const Header = () => {
     return (
       <div className="bg">
         <div className="container">
         <NavigationContainer />
         </div>
       </div>
     );
};

export default Header;