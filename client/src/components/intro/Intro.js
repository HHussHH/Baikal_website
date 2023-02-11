//Node
import { NavLink } from "react-router-dom";
//style
import "./intro.scss";
import { useEffect, useState } from "react";
import axios from "axios";
const Intro = () => {
  const [data, setData] = useState([
    {
      info: "",
    },
    {
      info: "",
    },
    {
      info: "",
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/another");
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [setData]);

  return (
    <div className="intro">
      <div className="intro__inner">
        <div className="intro__info">
          <p className="intro__info-text">{data[0].info}</p>
        </div>
        <div className="intro__about">
          <p>Наша почта</p>
          <NavLink to="/Contacts">{data[2].info}</NavLink>
          <p>Наш номер телефона</p>
          <NavLink to="/Contacts">{data[1].info}</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Intro;
