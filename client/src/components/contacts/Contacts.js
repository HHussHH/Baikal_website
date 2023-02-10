import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import "./contacts.scss";
import axios from "axios";
import { useEffect, useState } from "react";
const Contacts = () => {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    const data = async () => {
      try {
        const res = await axios.get("/contacts");
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    data();
  }, [setData]);

  const defaultState = {
    center: [51.805337, 107.603421],
    zoom: 16,
    width: 300,
  };

  return (
    <div className="contacts">
      <h2 className="contacts__title">Наши контакты</h2>
      <h3 className="contacts__orgName">
        Название организации: <b>{data[0].orgname}</b>
      </h3>
      <h3 className="contacts__telephone">
        Телефон (факс): {data[0].telephone}
      </h3>
      <h3 className="contacts__email">Электронная почта: {data[0].mail}</h3>
      <address className="contacts__address">{data[0].address}</address>

      <YMaps>
        <Map defaultState={defaultState} className="contacts__map">
          <Placemark geometry={[51.805337, 107.603421]} />
        </Map>
      </YMaps>
    </div>
  );
};

export default Contacts;
