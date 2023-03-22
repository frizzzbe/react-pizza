import React from "react";
import { Link } from "react-router-dom";

export const CartEmpty: React.FC = () => {
  return (
    <div className="container cart cart--empty">
      <h2>
        Корзина пустая <span>😕</span>
      </h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу.
        <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src={`${process.env.PUBLIC_URL}/empty-cart.png`} alt="Empty cart" />
      <Link to={`${process.env.PUBLIC_URL}/`} className="button button--black">
        <span>Вернуться назад</span>
      </Link>
    </div>
  );
}
