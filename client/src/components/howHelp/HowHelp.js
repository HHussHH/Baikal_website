//data
import { howHelpData } from "../../data/howToHelpData"
//style
import "./howHelp.scss"





const HowHelp = () => {

    const createHelpVariant = () => {
        const variant = howHelpData.map(variant => {
            return (
                <div className="help__variant" key={variant.id}>
                    <h3 className="help__variant-title">{variant.title}</h3>
                    <h4 className="help__variant-desctiption">{variant.desctiption}</h4>
                    {variant.form ? <form action="submit" className="help__variant-form">{variant.form}</form> : null}
                    {
                        variant.ads ? <div className="help__variant-ads">{variant.ads}</div> : null
                    }
                </div>
            )
        })

        return variant
    }
    return (
        <div className="help">
            <div className="container">
                <div className="help__inner">
                    <h1 className="help__title">Как помочь</h1>
                    <h2 className="help__description">Мы ценим Вас и Ваше время, поэтому предлагаем несколько вариантов. Вы можете выбрать сами, как помочь больному ребенку или самой программе.
                    </h2>

                    {createHelpVariant()}

                    <div className="help__footer">Это отличный шанс повысить корпоративный дух в компании, вовлечь в добрые дела сотрудников, помочь тяжелобольным детям и людям старшего возраста.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowHelp