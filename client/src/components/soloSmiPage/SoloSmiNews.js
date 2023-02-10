import { NavLink } from "react-router-dom";
import { smiAboutUsData } from "../../data/smiAboutUsData";
import "./soloSmiNews.scss";
const SoloSmiNews = ({ useId }) => {
  const currentData = smiAboutUsData.filter((item) => {
    return item.id === useId;
  });

  const { title, date, text } = currentData[0];

  return (
    <div className="soloSmiNews">
      <div className="container">
        <div className="soloSmiNews__inner">
          <h2 className="soloSmiNews__date">{date}</h2>
          <h2 className="soloSmiNews__title">{title}</h2>
          <p className="soloSmiNews__text">{text}</p>
          <div className="soloSmiNews__links">
            <NavLink className="soloSmiNews__back" to="/">
              Главная
            </NavLink>
            <NavLink className="soloSmiNews__all" to="/SmiAboutUs">
              Все статьи
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoloSmiNews;
