import React from "react";
import { programsData } from "../../data/programs";
import { NavLink, useLocation } from "react-router-dom";
import "./project.scss";
import axios from "axios";
import { useState, useEffect } from "react";

const Project = () => {
  const [project, setProject] = useState({});

  const location = useLocation();

  const projectId = location.pathname.split("/")[2];

  useEffect(() => {
    const data = async () => {
      try {
        const res = await axios.get(`/project/${projectId}`);
        setProject(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    data();
  }, [projectId]);

  return (
    <div className="soloProject">
      <div className="container">
        <div className="soloProjectCard">
          <div className="soloProjectCard__title">{project.title}</div>
          <img
            className="soloProjectCard__img"
            src={`../upload/projects/${project.img}`}
            alt=""
          />
          <div className="soloProjectCard__text">{project.desc}</div>
          <NavLink to="/HowHelp" className="soloProjectCard__btn">
            Поддержать
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Project;
