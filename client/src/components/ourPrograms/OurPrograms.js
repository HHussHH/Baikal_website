//node
import { NavLink } from "react-router-dom";
//components
//style
import "./ourPrograms.scss";

import axios from "axios";

import { useState, useEffect } from "react";

const OurPrograms = ({ setId }) => {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    const data = async () => {
      try {
        const res = await axios.get("/projects");
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    data();
  }, [setData]);

  console.log(data[0].id);
  const createCard = () => {
    const cards = data.map((card, index) => {
      return (
        <div className="ourPrograms__card" key={index}>
          <div className="ourPrograms__card-title">{card.title}</div>
          <div className="ourPrograms__card-img">
            <img src={`../upload/projects/${card.img}`} alt="" />
          </div>
          <div className="ourPrograms__card-text">{card.desc}</div>
          {card.sliderMax ? (
            <div className="ourPrograms__card-slider">
              <div
                className="ourPrograms__card-slider__count"
                style={{
                  width: (card.sliderNow * 100) / card.sliderMax + "%",
                }}
              ></div>
              <div className="ourPrograms__card-slider__count-start">
                {card.sliderNow}
              </div>
              <div className="ourPrograms__card-slider__count-end">
                {card.sliderMax}
              </div>
            </div>
          ) : null}

          <NavLink className="ourPrograms__card-btn" to="/HowHelp">
            Поддержать
          </NavLink>

          <NavLink
            className="ourPrograms__card-link"
            to={`${card.moreLink}${card.id}`}
            onClick={() => setId(card.id)}
          >
            Подробнее о проекте
          </NavLink>
        </div>
      );
    });

    return cards;
  };

  return (
    <div className="ourPrograms">
      <div className="container">
        <div className="ourPrograms__inner">
          <h1 className="ourPrograms__title">Добрые дела</h1>
          <div className="ourPrograms__body">{createCard()}</div>
        </div>
      </div>
    </div>
  );
};

export default OurPrograms;
