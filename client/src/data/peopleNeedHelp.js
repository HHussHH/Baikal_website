import img1 from "../img/peopleCard/nikita.jpg";
import img2 from "../img/peopleCard/saryn.jpg";
import key from "react-key-string";

export const peopleCardData = [
  {
    name: "Никита",
    description: "Никита, 3 года, ДЦП, сумма к сбору 170 000 рублей.",
    img: img1,
    moneyCurrentCount: 10000,
    moneyToFull: 170000,
    link: "/HowHelp/",
    id: key.generate(),
  },
  {
    name: "Сарюна",
    description: "Сарюна, 3 года, ДЦП, сумма к сбору 90 000 рублей.",
    img: img2,
    moneyCurrentCount: 0,
    moneyToFull: 90000,
    link: "/HowHelp/",
    id: key.generate(),
  },
  {
    name: "Новое имя",
    description: "Текст с короткой информацией",
    img: img1,
    moneyCurrentCount: 130000,
    moneyToFull: 200000,
    link: "/HowHelp/",
    id: key.generate(),
  },
  {
    name: "Новое имя",
    description: "Текст с короткой информацией",
    img: img2,
    moneyCurrentCount: 23000,
    moneyToFull: 70000,
    link: "/HowHelp/",
    id: key.generate(),
  },
];
