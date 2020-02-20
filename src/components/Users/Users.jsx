import React from "react";
import { Card , Button } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

import "./Users.scss";



const Users = props => {
  return (
    <>
      <div className="users_wraper">
        {props.users.map(user => (
          <Card key={user.id} style={{ width: "18rem" }}>
               <NavLink to={'/profile/' + user.id}>
            <Card.Img
              variant="top"
              src={
                user.photos.large != null
                  ? user.photos.large
                  : "https://helpiewp.com/wp-content/uploads/2017/12/user-roles-wordpress.png"
              }
            />
            </NavLink>
            <Card.Body>
              <Card.Title>
                <ol class="rounded">
                  <li>
                    <a href="#"> {user.name}</a>
                  </li>
                </ol>
              </Card.Title>
              <Card.Text>{user.status}</Card.Text>
              {user.followed ? (
                <Button
                  size="lg"
                  disabled={props.isFollowingInProgress.some(
                    id => id == user.id
                  )}
                  onClick={() => {
                    props.unFollowThunk(user.id);
                  }}
                  variant="primary"
                >
                  Отписаться
                </Button>
              ) : (
                <Button
                  size="lg"
                  disabled={props.isFollowingInProgress.some(
                    id => id == user.id
                  )}
                  onClick={() => {
                    props.followThunk(user.id);
                  }}
                  variant="success"
                >
                  Подписаться
                </Button>
              )}
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};




export default Users;