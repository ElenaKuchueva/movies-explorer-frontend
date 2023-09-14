import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFoundPage.css";

function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="notFoundPage">
      <div className="notFoundPage__block">
        <h1 className="notFoundPage__title">404</h1>
        <p className="notFoundPage__subtitle">Страница не найдена</p>
        <a
          onClick={() => navigate(-1)}
          className="notFoundPage__link"
          href="#"
        >
          Назад
        </a>
      </div>
    </div>
  );
}

export default NotFoundPage;
