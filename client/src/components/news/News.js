//node
import { NavLink } from "react-router-dom";
//components
import axios from "axios";
//style
import "./news.scss";
import { useEffect, useState } from "react";
const News = ({ setCurrentNewsId }) => {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    try {
      const data = async () => {
        const res = await axios.get("/news");
        setData(res.data);
      };
      data();
    } catch (err) {
      console.log(err);
    }
  }, [setData]);

  const createNewsCrad = () => {
    const card = data.map((card, id) => {
      return (
        <div className="news__card" key={id}>
          <div className="news__card-title">{card.title}</div>
          <div className="news__card-description">{card.desc}</div>
          <NavLink
            to={`/News/${card.id}`}
            onClick={() => setCurrentNewsId(card.id)}
            className="news__card-link"
          >
            Читать дальше
          </NavLink>
        </div>
      );
    });

    return <div className="news__block">{card}</div>;
  };
  return (
    <div className="news">
      <div className="container">
        <div className="news__inner">
          <h2 className="news__title">Наши новости:</h2>
          {createNewsCrad()}
        </div>
      </div>
    </div>
  );
};

export default News;
