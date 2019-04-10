import React from 'react';

import { Link } from 'react-router-dom';

const navItems = [
    { link: "/", title: "Strona główna" },
    { link: "/hotel", title: "Hotel" },
    { link: "/pokoje", title: "Pokoje" },
    { link: "/oferta", title: "Oferta" },
    { link: "/kontakt", title: "Kontakt" },
];

const Navigation = () => {
    const navListItem = navItems.map((item, index) =>
        <li key={index}>
            <Link
                to={item.link}
                title={item.title}>
                {item.title}
            </Link>
        </li>
    );

    return (
        <ul>
            {navListItem}
        </ul>
    );
}

export default Navigation;