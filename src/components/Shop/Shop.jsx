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
      <div className="shop_content">
        {props.books.map(oneItem => (
          <div class="product-wrap">
            <div class="product-item">
              <img height='350px' src={oneItem.image} alt={'Books'} />
              <div class="product-buttons">
                <i href="" class="button">
                  В корзину
                </i>
              </div>
            </div>
            <div class="product-title">
              <h4>{oneItem.title}</h4>
              <p>{oneItem.author}</p>
              <p class="product-price">  {oneItem.price} ₽</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};


export default Shop;
