import "./repostToSocial.scss"
import { repostData } from "../../data/repostToSocialData";
const RepostToSocial = () => {
    const createRepostCard = () => {
        const repostCard = repostData.map((el, id) => {
            return (
                <div className="repost__card" key={id}>
                    {el.element}
                </div>
            )
        })
        return repostCard
    }
    return (
        <div className="repost">
            <div className="container">
                <h2 className="repost__title">Поделиться в соц.сетях</h2>
                <div className="repost__inner">
                    {createRepostCard()}
                </div>
            </div>
        </div>
    )
}

export default RepostToSocial