import "./weThank.scss"

import { weThankData } from "../../data/weThankData"
const WeThank = () => {

    const createListItem = () => {
        const listItem = weThankData.map((item, id) => {
            return (
                <div className="weThank__list-item" key={item.id}>{id + 1}. {item.name}</div>
            )
        })
        return (
            <div className="weThank__list">
                {listItem}
            </div>
        )
    }
    return (
        <div className="weThank">
            <div className="container">
                <div className="weThank__inner">
                    <div className="weThank__title">Мы благодарим</div>
                    <div className="weThank__description">Добром вспомнится… Байкальский благотворительный фонд местного сообщества благодарит партнеров программы «Не остуди свое сердце» за бескорыстное стремление помогать детям.</div>
                    {createListItem()}
                </div>
            </div>
        </div>
    )
}

export default WeThank