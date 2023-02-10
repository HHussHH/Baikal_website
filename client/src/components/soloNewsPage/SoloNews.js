import "./soloNews.scss";
import { newsData } from "../../data/news";
import { NavLink } from "react-router-dom";

const SoloNews = ({ currentNewsId }) => {
  const currentData = newsData.filter((item) => {
    return item.id === currentNewsId;
  });
  const { title, text, img } = currentData[0];
  return (
    <div className="soloNews">
      <div className="container">
        <div className="soloNews__inner">
          <h1 className="soloNews__title">{title}</h1>
          {img ? <img className="soloNews__img" src={img} alt="" /> : null}
          <div className="soloNews__text">{text}</div>
          <div className="soloNews__links">
            <NavLink className="soloNews__back" to="/">
              Главная страница
            </NavLink>

            <NavLink className="soloNews__allNews" to="/News">
              Все новости
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoloNews;
