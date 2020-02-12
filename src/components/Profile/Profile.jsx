import React from "react";

import './Profile.scss';
import Preloader from "../common/Preloader/Preloader";


const Profile = () => {
     return (
          <div>
         <div className="d10"><h1 className='d10'>Личный кабинет</h1></div> 
          <Preloader />
          </div>
     );
};


export default Profile;