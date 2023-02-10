import "./smiAboutUs.scss";
import { smiAboutUsData } from "../../data/smiAboutUsData";
import { NavLink } from "react-router-dom";
const SmiAboutUs = ({ getId }) => {
  const createCards = () => {
    const cards = smiAboutUsData.map((card) => {
      return (
        <div className="smiAboutUs__card" key={card.id}>
          <div className="smiAboutUs__card-date">{card.date}</div>
          <h2 className="smiAboutUs__card-title">{card.title}</h2>
          <h3 className="smiAboutUs__card-description">{card.description}</h3>
          <NavLink
            to={`${card.link}${card.id}`}
            className="smiAboutUs__card-link"
            onClick={() => getId(card.id)}
          >
            Подробнее
          </NavLink>
        </div>
      );
    });

    return cards;
  };
  return (
    <div className="smiAboutUs">
      <div className="container">
        <div className="smiAboutUs__inner">{createCards()}</div>
        <button className="smiAboutUs__btn">Загрузить еще...</button>
      </div>
    </div>
  );
};

export default SmiAboutUs;
