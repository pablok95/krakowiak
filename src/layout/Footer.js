import React from 'react';
import { Link } from 'react-router-dom';
import { getContent } from '../utils/Utils';
import { navigationContent } from '../content/navigationContent';
import logo from '../images/footer-logo.png';


const Footer = props => {
    const navItems = getContent(navigationContent, props.lang);
    const navListItems = navItems.map((item, index) =>
        <li key={index}>
            <Link className="link" to={item.link} title={item.title}>{item.title}</Link>
        </li>
    );

    return (
        <footer id="footer" className="main-padding">
            <div className="container">
                <div className="content">
                    <img className="image elem-padding-bottom" src={logo} alt="logo" />
                    <ul className="footer-nav-items elem-padding-bottom">
                        {navListItems}
                    </ul>
                    <span className="footer-info">
                        <Link className="link" to="/polityka-prywatnosci" title="Polityka prywatności">Polityka prywatności</Link> | Copyright @2019
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;