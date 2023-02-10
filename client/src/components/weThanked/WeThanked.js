//components
import { weThankedData } from "../../data/weThankedData";
import { NavLink } from "react-router-dom";
//style
import "./weThanked.scss";

const WeThanked = ({ setId }) => {
  const createWeThankedCards = () => {
    const Cards = weThankedData.map((card) => {
      return (
        <div className="weThanked__card" key={card.id}>
          <div className="weThanked__card-img">
            <img src={card.img} alt="" />
          </div>
          <div className="weThanked__card-inner">
            <div className="weThanked__card-date">{card.date}</div>
            <div className="weThanked__card-title">{card.title}</div>
            <div className="weThanked__card-desctiption">{card.text}</div>
            <NavLink
              className="weThanked__card-link"
              to={`${card.link}${card.id}`}
              onClick={() => setId(card.id)}
            >
              Читать дальше
            </NavLink>
          </div>
        </div>
      );
    });

    return Cards;
  };
  return (
    <div className="weThanked">
      <div className="container">
        <div className="weThanked__inner">
          <div className="weThanked__title">Нас благодарят</div>
          {createWeThankedCards()}
        </div>
      </div>
    </div>
  );
};

export default WeThanked;
