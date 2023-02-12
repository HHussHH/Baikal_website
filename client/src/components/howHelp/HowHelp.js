//style
import "./howHelp.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import parse from "html-react-parser";
const HowHelp = () => {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    const fetachData = async () => {
      try {
        const res = await axios.get("/howHelp");
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetachData();
  }, [setData]);

  const element = () => {
    const card = data.map((item, id) => {
      return (
        <div className="help__variant" key={id}>
          <h2 className="help__variant-title">
            {item.id}. {item.title}
          </h2>
          <p className="help__variant-desctiption">{parse(`${item.desc}`)}</p>
          <div className="help__variant-img">
            {item.img ? (
              <img src={`../upload/howHelp/${item.img}`} alt="" />
            ) : null}
          </div>
        </div>
      );
    });

    return card;
  };
  return (
    <div className="help">
      <div className="container">
        <div className="help__inner">
          <div className="help__title">Как помочь</div>
          {element()}
          <div className="help__footer">
            Это отличный шанс повысить корпоративный дух в компании, вовлечь в
            добрые дела сотрудников, помочь тяжелобольным детям и людям старшего
            возраста.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowHelp;
