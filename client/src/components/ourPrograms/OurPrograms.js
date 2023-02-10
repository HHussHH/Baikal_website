//node
import { NavLink } from "react-router-dom"
//components
import { programsData } from "../../data/programs"
//style
import "./ourPrograms.scss"

const OurPrograms = ({ setId }) => {

    const createCard = () => {
        const cards = programsData.map(card => {
            return (
                <div className="ourPrograms__card" key={card.id}>
                    <div className="ourPrograms__card-title">{card.title}</div>
                    <div className="ourPrograms__card-img">
                        <img src={card.img} alt="" />
                    </div>
                    <div className="ourPrograms__card-text">{card.text}</div>
                    {card.sliderProgress ?
                        <div className="ourPrograms__card-slider">
                            <div className="ourPrograms__card-slider__count"
                                style={{ width: (card.sliderProgress * 100 / card.sliderMaxProgress) + "%" }}>
                            </div>
                            <div className="ourPrograms__card-slider__count-start">{card.sliderProgress}</div>
                            <div className="ourPrograms__card-slider__count-end">{card.sliderMaxProgress}</div>
                        </div>
                        : null}


                    <NavLink className="ourPrograms__card-btn" to="/HowHelp">Поддержать</NavLink>

                    <NavLink className="ourPrograms__card-link" to={`${card.moreLink}${card.id}`} onClick={() => setId(card.id)} >Подробнее о проекте</NavLink>
                </div >
            )
        })

        return (
            cards
        )
    }

    return (
        <div className="ourPrograms">
            <div className="container">
                <div className="ourPrograms__inner">
                    <h1 className="ourPrograms__title">Добрые дела</h1>
                    <div className="ourPrograms__body">
                        {createCard()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurPrograms