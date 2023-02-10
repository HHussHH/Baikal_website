import "./cardForHowHelp.scss";
import { peopleCardData } from "../../data/peopleNeedHelp";
const CardForHowHelp = ({ useId }) => {
  const currentData = peopleCardData.filter((item) => {
    return item.id === useId;
  });

  const { name, img } = currentData[0];

  return (
    <div className="cardForHowHelp">
      <div className="container">
        <div className="cardForHowHelp__inner">
          <h2 className="cardForHowHelp__title">{name}</h2>
          <img src={img} alt="" className="cardForHowHelp__img" />
          <p className="cardForHowHelp__text">
            Вы выбрали этого человека для оказания помощи
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardForHowHelp;
