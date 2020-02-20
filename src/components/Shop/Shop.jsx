import React  from "react";
import { ButtonGroup ,  Button } from "react-bootstrap";


import './Shop.scss';

const Shop = ({setFilter, setSearchQuery, books, searchQuery}) => {
  return (
    <>
      <div className="shop_wraper">
        <ButtonGroup aria-label="Basic example">
          <Button
            onClick={() => {
              setFilter("all");
            }}
            variant="info"
          >
            Все товары
          </Button>
          <Button
            onClick={() => {
              setFilter("price_high");
            }}
            variant="info"
          >
            Цена(Дорогие)
          </Button>
          <Button
            onClick={() => {
              setFilter("price_low");
            }}
            variant="info"
          >
            Цена(Дешевый)
          </Button>
          <Button
            onClick={() => {
              setFilter("popular");
            }}
            variant="info"
          >
            Рейтинг
          </Button>
          <Button
            onClick={() => {
              setFilter("author");
            }}
            variant="info"
          >
            По названию
          </Button>
        </ButtonGroup>

        <div className="search">
          <input
            onChange={e => setSearchQuery(e.target.value)}
            value={searchQuery}
            type="search"
            placeholder="поиск"
            className="input"
          />
          <input className="submit" />
        </div>
      </div>
      <div className="shop_content">
        {books.length === 0 ? (
          <div>
            <h1>Поиск не дал результата</h1>
          </div>
        ) : (
          books.map(oneItem => (
            <div key={oneItem.id} className="product-wrap">
              <div className="product-item">
                <img height="350px" src={oneItem.image} alt={"Books"} />
                <div className="product-buttons">
                  <i  className="button">
                    В корзину
                  </i>
                </div>
              </div>
              <div className="product-title">
                <h4>{oneItem.title}</h4>
                <p>{oneItem.author}</p>
                <p>Рейтинг : {oneItem.rating} / 5</p>
                <p className="product-price"> {oneItem.price} ₽</p>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Shop;
