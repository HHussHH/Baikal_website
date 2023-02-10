import { NavLink, useLocation } from "react-router-dom";
import "./soloSmiNews.scss";
import { useEffect, useState } from "react";
import axios from "axios";
const SoloSmiNews = () => {
  const [smiPost, setSmiPost] = useState({});

  const location = useLocation();

  const smiId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/smi/${smiId}`);
        setSmiPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [smiId]);

  return (
    <div className="soloSmiNews">
      <div className="container">
        <div className="soloSmiNews__inner">
          <h2 className="soloSmiNews__date">{smiPost.date}</h2>
          <h2 className="soloSmiNews__title">{smiPost.title}</h2>
          <p className="soloSmiNews__text">{smiPost.desc}</p>
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
