//node
import { NavLink } from "react-router-dom";
//components
import { newsData } from "../../data/news";
//style
import "./news.scss";
const News = ({ setCurrentNewsId }) => {
  const createNewsCrad = () => {
    const card = newsData.map((card) => {
      return (
        <div className="news__card" key={card.id}>
          <div className="news__card-title">{card.title}</div>
          <div className="news__card-description">{card.description}</div>
          <NavLink
            to={`${card.link}${card.id}`}
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
