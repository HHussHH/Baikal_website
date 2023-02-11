import { useEffect, useState } from "react";
import "./soloNews.scss";
import { NavLink, useLocation } from "react-router-dom";

import axios from "axios";

const SoloNews = () => {
  const [news, setNews] = useState({});
  const location = useLocation();
  const newsId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/news/${newsId}`);
        setNews(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [newsId]);

  return (
    <div className="soloNews">
      <div className="container">
        <div className="soloNews__inner">
          <h1 className="soloNews__title">{news.title}</h1>
          {news.title ? (
            <img className="soloNews__img" src="img" alt="" />
          ) : null}
          <div className="soloNews__text">{news.desc}</div>
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
