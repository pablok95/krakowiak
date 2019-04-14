import React from 'react';
import { Link } from 'react-router-dom';
import { getContent } from '../utils/Utils';
import { navigationContent } from '../content/navigationContent';
import logo from '../images/footer-logo.png';


const Footer = props => {
    const navItems = getContent(navigationContent, props.lang);
    const navListItems = navItems.map((item, index) =>
        <li key={index}>
            <Link to={item.link} title={item.title}>{item.title}</Link>
        </li>
    );

    return (
        <footer className="footer">
            <div className="container">
                <div className="content">
                    <img className="image" src={logo} alt="logo" />
                    <ul className="footer-nav-list">
                        {navListItems}
                    </ul>
                    <span className="footer-info">
                        <Link to="/polityka-prywatnosci" title="Polityka prywatności">Polityka prywatności</Link> / Copyright @2019
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;