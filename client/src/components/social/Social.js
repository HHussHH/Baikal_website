//node
import { SlSocialVkontakte } from 'react-icons/sl';
import { FaOdnoklassniki } from 'react-icons/fa';
import { FiFacebook } from 'react-icons/fi';
import { NavLink } from "react-router-dom";
//style
import "./social.scss"


const Social = () => {
    return (
        <div className="social">
            <div className="container">
                <div className="social__inner">
                    <h2 className="social__title">Наши социальные сети</h2>
                    <div className="social__cards">
                        <NavLink to="/Contacts" className="social__card"  >
                            <SlSocialVkontakte size={50} style={{ color: "#13A2F2" }} />
                        </NavLink>
                        <NavLink to="/Contacts" className="social__card">
                            <FaOdnoklassniki size={50} style={{ color: "#ED6E13" }} />
                        </NavLink>
                        <NavLink to="/Contacts" className="social__card">
                            <FiFacebook size={50} style={{ color: "#415ADF" }} />
                        </NavLink>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Social