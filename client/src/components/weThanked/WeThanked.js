//components
import { NavLink } from "react-router-dom";
//style
import "./weThanked.scss";
import axios from "axios";
import { useEffect, useState } from "react";

const WeThanked = ({ setId }) => {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    const data = async () => {
      const res = await axios.get("/weThanked");
      setData(res.data);
    };
    data();
  }, [setData]);
  const createWeThankedCards = () => {
    const Cards = data.map((card, id) => {
      return (
        <div className="weThanked__card" key={id}>
          <div className="weThanked__card-img">
            <img src={`../upload/weThanked/${card.img}`} alt="" />
          </div>
          <div className="weThanked__card-inner">
            <div className="weThanked__card-date">{card.date}</div>
            <div className="weThanked__card-title">{card.title}</div>
            <div className="weThanked__card-desctiption">{card.desc}</div>
            <NavLink
              className="weThanked__card-link"
              to={`/WeThanked/${card.id}`}
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
