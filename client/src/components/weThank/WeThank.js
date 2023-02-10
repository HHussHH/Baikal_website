import "./weThank.scss";
import axios from "axios";
import { useState, useEffect } from "react";
const WeThank = () => {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    const data = async () => {
      try {
        const res = await axios.get("/weThank");
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    data();
  }, [setData]);

  const createListItem = () => {
    const listItem = data.map((item, id) => {
      return (
        <div className="weThank__list-item" key={id}>
          {item.id}. {item.name}
        </div>
      );
    });
    return <div className="weThank__list">{listItem}</div>;
  };
  return (
    <div className="weThank">
      <div className="container">
        <div className="weThank__inner">
          <div className="weThank__title">Мы благодарим</div>
          <div className="weThank__description">
            Добром вспомнится… Байкальский благотворительный фонд местного
            сообщества благодарит партнеров программы «Не остуди свое сердце» за
            бескорыстное стремление помогать детям.
          </div>
          {createListItem()}
        </div>
      </div>
    </div>
  );
};

export default WeThank;
