//Node
import { NavLink } from "react-router-dom"
//style
import "./intro.scss"
const Intro = () => {
    return (
        <div className="intro">
            <div className="intro__inner">

                <div className="intro__info">
                    <p className="intro__info-text">
                        Ресурсный центр по работе с людьми старшего возраста создан на базе Байкальского благотворительного фонда местного сообщества для объединения усилий по внедрению лучших практик и технологий работы со старшим поколением.
                    </p>
                </div>
                <div className="intro__about">
                    <p>Наша почта</p>
                    <NavLink to="/Contacts">bbfond@list.ru</NavLink>
                    <p>Наш номер телефона</p>
                    <NavLink to="/Contacts">+7 (3012) 23 - 22 - 16</NavLink>
                </div>
            </div>

        </div>
    )
}

export default Intro