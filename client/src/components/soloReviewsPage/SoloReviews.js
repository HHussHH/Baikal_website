import React from "react";
import { NavLink } from "react-router-dom";
import { weThankedData } from "../../data/weThankedData";
import "./soloReviews.scss";
const SoloReviews = ({ useId }) => {
  const currentData = weThankedData.filter((item) => {
    return item.id === useId;
  });

  const { title, text, img } = currentData[0];

  return (
    <div className="soloReviews">
      <div className="container">
        <div className="soloReviews__inner">
          <h2 className="soloReviews__title">{title}</h2>
          <img src={img} alt="" className="soloReviews__img" />
          <h3 className="soloReviews__text">{text}</h3>
          <div className="soloReviews__links">
            <NavLink className="soloReviews__back" to="/">
              Главная
            </NavLink>

            <NavLink className="soloReviews__allReviews" to="/WeThanked">
              Все отзывы
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoloReviews;
