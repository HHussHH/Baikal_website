import img from "../img/suveniry.jpg"
import img2 from "../img/babushki.jpg"
import key from 'react-key-string';

export const programsData = [
    {
        img: img,
        title: "Программа «Благотворительность вместо сувениров»",
        text: "Уважаемые друзья, Вы можете приобрести эксклюзивные подарки в дар своим партнерам, друзьям, гостям на любой праздник или событие. Приобретя их, Вы станете участником программы помощи тяжелобольным детям и пожилым людям. Благотворить так просто!",
        btnLink: "/",
        moreLink: `/project/`,
        id: key.generate(),
    },
    {
        img: img2,
        title: "Проект «Бабушка на час»",
        text: "Как то одна женщина, муж которой работает допоздна, сказала: — Мне так иногда одиноко, что я начинаю разговаривать с кастрюлями… А у Вас бывают такие дни, что хочется выть от тоски? Попробуйте представить одинокую маму, воспитывающего ребенка инвалида или одинокую бабушку. Что они чувствуют по-Вашему каждый день, вечерами или в праздники…",
        sliderProgress: 60000,
        sliderMaxProgress: 300000,

        btnLink: "/",
        moreLink: `/project/`,
        id: key.generate(),
    },
    {
        img: img,
        title: "Программа «Благотворительность вместо сувениров» ",
        text: "Уважаемые друзья, Вы можете приобрести эксклюзивные подарки в дар своим партнерам, друзьям, гостям на любой праздник или событие. Приобретя их, Вы станете участником программы помощи тяжелобольным детям и пожилым людям. Благотворить так просто!",
        sliderProgress: 290000,
        sliderMaxProgress: 640000,
        btnLink: "/",
        moreLink: `/project/`,
        id: key.generate(),
    },
    {
        img: img2,
        title: "Проект «Бабушка на час»",
        text: "Как то одна женщина, муж которой работает допоздна, сказала: — Мне так иногда одиноко, что я начинаю разговаривать с кастрюлями… А у Вас бывают такие дни, что хочется выть от тоски? Попробуйте представить одинокую маму, воспитывающего ребенка инвалида или одинокую бабушку. Что они чувствуют по-Вашему каждый день, вечерами или в праздники…",
        moreText: "Как то одна женщина, муж которой работает допоздна, сказала: — Мне так иногда одиноко, что я начинаю разговаривать с кастрюлями… А у Вас бывают такие дни, что хочется выть от тоски? Попробуйте представить одинокую маму, воспитывающего ребенка инвалида или одинокую бабушку. Что они чувствуют по-Вашему каждый день, вечерами или в праздники…",
        sliderProgress: 190000,
        sliderMaxProgress: 540000,

        btnLink: "/",
        moreLink: `/project/`,
        id: key.generate(),
    },
]