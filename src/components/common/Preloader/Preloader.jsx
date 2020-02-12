import React from "react";
import { Spinner } from "react-bootstrap";

import './Preloader.scss';



const Preloader = () => {
     return (
          <div className='preloader'>
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="primary" />
          </div>
     );
}




export default Preloader;