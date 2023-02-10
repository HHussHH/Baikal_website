import "./peopleCard.scss";

import { peopleCardData } from "../../data/peopleNeedHelp";
import { NavLink } from "react-router-dom";
const PeopleCard = ({ getId }) => {
  const createPeopleCardElement = () => {
    const cardPeople = peopleCardData.map((card) => {
      const currentSliderProgres =
        (card.moneyCurrentCount * 100) / card.moneyToFull;
      return (
        <div className="peopleCard" key={card.id}>
          <h2 className="peopleCard__title">{card.name}</h2>
          <div className="peopleCard__img">
            <img src={card.img} alt={card.name} />
          </div>
          <h3 className="peopleCard__text">{card.description}</h3>
          <div className="peopleCard__slider-text">
            {card.moneyCurrentCount}/{card.moneyToFull}
          </div>
          <div className="peopleCard__slider">
            <div
              className="peopleCard__slider-progres"
              style={{ width: `${currentSliderProgres}%` }}
            ></div>
          </div>
          <NavLink
            className="peopleCard__btn"
            to={`${card.link}${card.id}`}
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
