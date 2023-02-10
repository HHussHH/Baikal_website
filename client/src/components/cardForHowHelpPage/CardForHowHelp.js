import { useState, useEffect } from "react";
import "./cardForHowHelp.scss";
import { useLocation } from "react-router";
import axios from "axios";
const CardForHowHelp = () => {
  const [card, setCard] = useState({});

  const location = useLocation();

  const cardId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/HowHelp/${cardId}`);
        setCard(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cardId]);

  return (
    <div className="cardForHowHelp">
      <div className="container">
        <div className="cardForHowHelp__inner">
          <h2 className="cardForHowHelp__title">{card.name}</h2>
          <img
            src={`../upload/needHelp/${card.img}`}
            alt=""
            className="cardForHowHelp__img"
          />
          <p className="cardForHowHelp__text">
            Вы выбрали этого человека для оказания помощи
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardForHowHelp;
