import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import "./contacts.scss"
const Contacts = () => {

    const defaultState = {
        center: [51.805337, 107.603421],
        zoom: 16,
        width: 300,
    };


    return (

        <div className="contacts">
            <h2 className="contacts__title">Наши контакты</h2>
            <h3 className="contacts__orgName">
                Название организации: <b>Байкальский региональный общественный благотварительный фонд  местного сообщества</b>
            </h3>
            <h3 className="contacts__telephone">Телефон (факс): (301-2) 23-22-16.</h3>
            <h3 className="contacts__email">
                Электронная почта: bbfond@mail.ru (администратор программы — Грудинина Елена Владимировна)
            </h3>
            <address className='contacts__address'>
                Адрес:  670031, Республика Бурятия, г. Улан-Удэ, г. Улан-Удэ, ул. Бабушкина, 25.
            </address>

            <YMaps >
                <Map defaultState={defaultState} className="contacts__map" >
                    <Placemark geometry={[51.805337, 107.603421]} />
                </Map>
            </YMaps>

        </div>


    )
}

export default Contacts