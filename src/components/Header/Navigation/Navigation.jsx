import React from "react";
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown ,Image } from "react-bootstrap";

import logo from '../../../assets/img/kid-and-baby.svg';
import Preloader from "../../common/Preloader/Preloader";


const Navigation = ({login , profile ,  logOut}) => {
  
    

  return (
    <Navbar bg="primary" className="bg" expand="lg">
      <Navbar.Brand href="#0">
        <img width="100px" height="70px" src={logo} alt="Site logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <NavLink
              activeClassName="active"
              className="navigation__link"
              to="/profile"
            >
              Кабинет
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink
              activeClassName="active"
              className="navigation__link"
              to="/news"
            >
              Новости{" "}
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink
              activeClassName="active"
              className="navigation__link"
              to="/users"
            >
              Список пользователей приложения
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink
              activeClassName="active"
              className="navigation__link"
              to="/shop"
            >
              Магазин{" "}
            </NavLink>
          </Nav.Link>
          <Nav.Link> </Nav.Link>
          <NavDropdown title="Другое">
            <NavDropdown.Item>Мои заметки</NavDropdown.Item>
            <NavDropdown.Item>Страница постов блога</NavDropdown.Item>
            <NavDropdown.Item>Создать свой пост</NavDropdown.Item>
            <NavDropdown.Item>Корзина магазина</NavDropdown.Item>
            <NavDropdown.Item onClick={logOut}>Выйти из приложения</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>Настройки личного кабинета</NavDropdown.Item>
            <NavDropdown.Item>
                Вы вошли как: <b>{login}</b>
            </NavDropdown.Item>
          </NavDropdown>

          <Image
            width="55px"
            height="50px"
            src = {profile != null
            ? profile.photos.large
            : "https://pngimage.net/wp-content/uploads/2018/06/user-png-image-5.png"}
            roundedCircle
          />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
