import "./smiAboutUs.scss";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const SmiAboutUs = ({ getId }) => {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    const data = async () => {
      const res = await axios.get("/smi");
      setData(res.data);
    };
    data();
  }, [setData]);

  const createCards = () => {
    const cards = data.map((card, id) => {
      return (
        <div className="smiAboutUs__card" key={id}>
          <div className="smiAboutUs__card-date">{card.date}</div>
          <h2 className="smiAboutUs__card-title">{card.title}</h2>
          <h3 className="smiAboutUs__card-description">{card.desc}</h3>
          <NavLink
            to={`/SmiAboutUs/${card.id}`}
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
