//node
import { NavLink } from 'react-router-dom'
//components and other
import { linkTextData } from "../../data/headerLink"

//style
import logo from "../../img/headerImg/bbfms.png"
import "./header.scss"

const createNavLink = () => {
    const links = linkTextData.map((link, id) => {
        return (
            <li className="header__nav-link" key={id}>
                <NavLink to={link.to} className="header__nav-link__a">
                    {link.text}</NavLink>
            </li>
        )
    })
    return (
        <ul className="header__nav-spisok">
            {links}
        </ul>
    )
}

const activeLink = " activeLink";
const Header = ({ setForm, formState }) => {
    return (
        <div className="header">
            <div className="container">
                <div className="header__inner">
                    <NavLink to="/"
                        className={({ isActive }) => isActive ? activeLink : ""}>
                        <img className="header__logo" src={logo} alt="logo" />
                    </NavLink>
                    <nav className="header__nav">
                        {createNavLink()}
                    </nav>
                    <div className="header__btn"
                        title="При нажатии на кнопку, вы перейдете на страницу с нашими предложениями о сотрудничестве">
                        <button onClick={() => { document.body.classList.add('modal-open'); setForm(!formState) }}>Помочь</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header