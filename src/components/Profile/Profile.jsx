import React from "react";
import { Image , Col} from "react-bootstrap";

import './Profile.scss';
import Preloader from "../common/Preloader/Preloader";


const Profile = () => {
  return (
    <div>
      <div className="d10">
        <h1 className="d10">Личный кабинет</h1>
      </div>
      <div className="row">
        <div className="col d-flex flex-column justify-content-center profile">
          <Col xs={7} md={9}>
            <div className="example-1">
              <label className="label">
                <i className="material-icons">attach_file</i>
                <input type="file" />
              </label>
            </div>
            <Image
              src="https://helpiewp.com/wp-content/uploads/2017/12/user-roles-wordpress.png"
              thumbnail
            />
            <div className="wraper_profile">
              <h1 className="  d-flex justify-content-center profile_title">
                yarik_shelest
              </h1>
              <hr />
              <p className="button-2">
                <p>Редактировать cтатус</p>
              </p>
              <div className="profile_status  ">
                "Сегодня такой сложный день,xочу выпить "
              </div>
            </div>
          </Col>
        </div>
        <div className="col">
          <h2>Контактная информация:</h2>
          <hr />
          <p>
            В поисках работы(да\нет) : <i className="fas fa-check-circle"></i>
            <i className="fas fa-times-circle"></i>
          </p>
          <br />
          <br />
          <p>Я крутой чувак!!</p>

          <h4>Социальные контакты:</h4>
        </div>
      </div>
      <Preloader />
    </div>
  );
};

export default Profile;