import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./soloReviews.scss";
import axios from "axios";
const SoloReviews = () => {
  const location = useLocation();
  const reviewId = location.pathname.split("/")[2];

  const [review, setReview] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/weThanked/${reviewId}`);
        setReview(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [reviewId]);

  return (
    <div className="soloReviews">
      <div className="container">
        <div className="soloReviews__inner">
          <h2 className="soloReviews__title">{review.title}</h2>
          <img
            src={`../upload/weThanked/${review.img}`}
            alt=""
            className="soloReviews__img"
          />
          <h3 className="soloReviews__text">{review.desc}</h3>
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
