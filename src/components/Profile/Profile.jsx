import React from "react";
import { Image , Col} from "react-bootstrap";

import './Profile.scss';
import ProfileStatus from './ProfileStatus'
import Preloader from "../common/Preloader/Preloader";


const Profile = ({profile , status , updateStatus , isOwner , savePhoto }) => {
  
  if (!profile) {
    return <Preloader />;
  }
  const onMainPhotoSelected = e => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };
  return (
    <div>
      <div className="d10">
        <h1 className="d10">Личный кабинет</h1>
      </div>
      <div className="row">
        <div className="col d-flex flex-column justify-content-center ">
          <Col xs={7} md={9}>
            <div className="example-1">
              <label className="label">
                <i className="material-icons">attach_file</i>
                <input type="file"  onChange={onMainPhotoSelected} />
              </label>
            </div>
            <Image
              src={
                profile.photos.large != null
                  ? profile.photos.large
                  : "https://helpiewp.com/wp-content/uploads/2017/12/user-roles-wordpress.png"
              }
              alt="ava"
              thumbnail
            />
            <div className="wraper_profile ">
              <h1 className="  d-flex justify-content-center profile_title">
                {profile.fullName}
              </h1>
              <hr />
              <ProfileStatus
                isOwner={isOwner}
                status={status}
                updateStatus={updateStatus}
              />
            </div>
          </Col>
        </div>
        <div className="col profile">
          <h2>Контактная информация:</h2>
          <hr />
          <p>
          <b> В поисках работы(да\нет)</b> : &nbsp;
            {profile.lookingForAJob ? (
              <i className="fas fa-check-circle"></i>
            ) : (
              <i className="fas fa-times-circle"></i>
            )}
            {profile.lookingForAJob && (
              <div >
                <b>Мои навыки</b>: &nbsp;
                {profile.lookingForAJobDescription}
              </div>
            )}
          </p>
          <br />
          <h2>Обо мне:</h2>
          <br />
          <p>{profile.aboutMe}</p>

          <h4>Социальные контакты:</h4>
          {Object.keys(profile.contacts).map(key => {
            return (
              <Contact
                key={key}
                contactTitle={key}
                contactValue={profile.contacts[key]}
              />
            );
          })}
          {isOwner &&  <p  className="button-2 setting_button">
          <p>Изменить настройки профиля &nbsp; <i class="fas fa-user-cog"></i></p>
        </p> }
        </div>
      </div>
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  if (contactValue === null) {
    return (
      <div>
        <b>{contactTitle}</b>: &nbsp;  <i className="fas fa-times-circle"></i>
      </div>
    );
  }
  return (
    <div>
      <b> {contactTitle}</b>: {contactValue}
    </div>
  );
};

export default Profile;