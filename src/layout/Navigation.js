import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

import logo from '../images/logo.png';
import { getOffset } from '../utils/Utils';

const navItems = [
    { link: "/", title: "Strona główna" },
    { link: "/hotel", title: "Hotel" },
    { link: "/pokoje", title: "Pokoje" },
    { link: "/oferta", title: "Oferta" },
    { link: "/kontakt", title: "Kontakt" },
];

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileMenuActive: false,
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, false);

    }

    handleScroll = (e) => {
        const navbar = document.getElementById('navbar');
        const offset = getOffset();

        if (offset > 0) {
            navbar.classList.add('scroll');
        } else {
            navbar.classList.remove('scroll');
        }
    }

    handleClickMenu = () => {
        this.setState({
            mobileMenuActive: !this.state.mobileMenuActive
        })
    };

    render() {
        const navListItem = navItems.map((item, index) =>
            <li key={index}>
                <NavLink
                    className="nav-link"
                    to={item.link}
                    title={item.title}
                    exact
                    onClick={this.handleClickMenu}>
                    {item.title}
                </NavLink>
            </li>
        );

        const mobileMenu = !this.state.mobileMenuActive ? 'mobile-navigation' : 'mobile-navigation active';
        const mobileBtnMenu = !this.state.mobileMenuActive ? 'nav-btn-wrapper' : 'nav-btn-wrapper active';

        return (
            <header>
                <div id="navbar" className="navbar">
                    <div className="container">
                        <div className="navbar-content">
                            <div className="logo">
                                <Link to="/" title="Strona główna">
                                    <img src={logo} alt="logo" />
                                </Link>
                            </div>
                            <div className="navigation">
                                <ul>
                                    {navListItem}
                                </ul>
                            </div>
                            <div className={mobileMenu}>
                                <ul className="nav-content">
                                    {navListItem}
                                </ul>
                            </div>
                            <div className={mobileBtnMenu}>
                                <div onClick={this.handleClickMenu} className="nav-btn">
                                    <div className="bar bar-1"></div>
                                    <div className="bar bar-2"></div>
                                    <div className="bar bar-3"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Navigation;