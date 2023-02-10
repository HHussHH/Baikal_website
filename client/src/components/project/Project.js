import React from 'react'
import { programsData } from '../../data/programs'
import { NavLink } from "react-router-dom"
import "./project.scss"
const Project = ({ currentProjectId }) => {


    const currentData = programsData.filter(item => {
        return item.id === currentProjectId
    })
    const { title, text, img } = currentData[0];
    return (
        <div className='soloProject'>
            <div className="container">
                <div className="soloProjectCard">
                    <div className="soloProjectCard__title">{title}</div>
                    <img className="soloProjectCard__img" src={img} alt="" />
                    <div className="soloProjectCard__text">{text}</div>
                    <NavLink to="/HowHelp" className="soloProjectCard__btn">Поддержать</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Project