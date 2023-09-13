import React from "react";
import "./NotFoundPage.css";

function NotFoundPage() {
  return (
    <div className="notFoundPage">
      <div className="notFoundPage__block">
        <h1 className="notFoundPage__title">404</h1>
        <p className="notFoundPage__subtitle">Страница не найдена</p>
        <p className="notFoundPage__link">Назад</p>
      </div>
    </div>
  );
  }

export default NotFoundPage;
