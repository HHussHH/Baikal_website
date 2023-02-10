import "./peopleCard.scss";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const PeopleCard = ({ getId }) => {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    const data = async () => {
      try {
        const res = await axios.get("/needHelp");
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    data();
  }, [setData]);

  const createPeopleCardElement = () => {
    const cardPeople = data.map((card, index) => {
      const currentSliderProgres = (card.sliderNow * 100) / card.sliderMax;

      return (
        <div className="peopleCard" key={index}>
          <h2 className="peopleCard__title">{card.name}</h2>
          <div className="peopleCard__img">
            <img src={`../upload/needHelp/${card.img}`} alt={card.name} />
          </div>
          <h3 className="peopleCard__text">{card.desc}</h3>
          <div className="peopleCard__slider-text">
            {card.sliderNow}/{card.sliderMax}
          </div>
          <div className="peopleCard__slider">
            <div
              className="peopleCard__slider-progres"
              style={{ width: `${currentSliderProgres}%` }}
            ></div>
          </div>
          <NavLink
            className="peopleCard__btn"
            to={`/HowHelp/${card.id}`}
            onClick={() => getId(card.id)}
          >
            Пожертвовать
          </NavLink>
        </div>
      );
    });
    return cardPeople;
  };
  return (
    <div className="peopleCards">
      <div className="container">
        <h2 className="peopleCards__title">Им нужна помощь</h2>
        <div className="peopleCards__inner">{createPeopleCardElement()}</div>
      </div>
    </div>
  );
};

export default PeopleCard;
