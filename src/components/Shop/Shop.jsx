import React  from "react";
import { ButtonGroup ,  Button } from "react-bootstrap";


import './Shop.scss';

const Shop = props => {
  return (
    <>
      <div className="shop_wraper">
        <ButtonGroup size="lg" aria-label="Basic example">
          <Button variant="info">Все товары</Button>
          <Button variant="info">Цена(Возростание)</Button>
          <Button variant="info">Цена(Убывание)</Button>
          <Button variant="info">По названию</Button>
        </ButtonGroup>

        <div className="search">
          <input type="search" name="" placeholder="поиск" className="input" />
          <input type="submit" name="" value="" className="submit" />
        </div>
      </div>
      <div className='shop_content'>
        <div class="product-wrap">
          <div class="product-item">
            <img src="https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/27624091-den-braun-proishozhdenie-27624091.jpg" />
            <div class="product-buttons">
              <i href="" class="button">
                В корзину
              </i>
            </div>
          </div>
          <div class="product-title">
            <h3>dlsfllds;fldsl</h3>
            <p>fdnjh fdnjfj</p>
            <p class="product-price">₽ 1999</p>
          </div>
        </div>

      </div>
    </>
  );
};


export default Shop;
