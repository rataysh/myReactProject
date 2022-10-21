import React from "react";
import ReactDOM from "react-dom/client";
import AppLogo from "./js/appBar/appLogo";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div className="m-10">
        <h1 className="">TEST TEKST</h1>
        <ul>
            <li>Пицца</li>
            <li>Комбо</li>
            <li>Закуски</li>
            <li>Десерты</li>
            <li>Напитки</li>
            <li>Другие товары</li>
            <li>Акции</li>
            <li>Контакты</li>
            <li>Франшиза</li>
            <li>О нас</li>
            <li>Прямой эфир</li>
        </ul>
        <div>
            <button type="button" data-type="primary" data-size="medium">
                Корзина
            </button>
        </div>
    </div>
);
