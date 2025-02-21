import React, { useState } from 'react';
import Logo from '../Logo';
import DataTime from '../DataTime';
import { NavLink } from 'react-router';

import styles from './Header.module.scss';
import NavLinkItem from './NavLinkItem';

const NAV_LINKS = [
    {
        src: '/linkIcon/home.svg',
        menuItem: 'Home',
        link: '/',
        hasNotifications: false,
        isActive: false,
    },
    {
        src: '/linkIcon/about.svg',
        menuItem: 'About',
        link: '/about',
        hasNotifications: false,
        isActive: false,
    },
    {
        src: '/linkIcon/projects.svg',
        menuItem: 'Projects',
        link: '/projects',
        hasNotifications: false,
        isActive: false,
    },
    {
        src: '/linkIcon/contacts.svg',
        menuItem: 'Contacts',
        link: '/contacts',
        hasNotifications: false,
        isActive: false,
    },
];

{
    /* <li>
<NavLink to='/'>Home</NavLink>
</li>
<li>
<NavLink to='/about'>About</NavLink>
</li>
<li>
<NavLink to='/contacts'>Contacts</NavLink>
</li>
<li>
<NavLink to='/projects'>Projects</NavLink>
</li> */
}

function Header () {
    const [navLinks, setNavLinks] = useState(NAV_LINKS);

    function changeActiveLink (selectedNavLinkIndex) {
        const copyNavLinks = [...navLinks];

        const activeNavLinkIndex = copyNavLinks.findIndex(
            item => item.isActive
        );
        if (activeNavLinkIndex !== -1) {
            copyNavLinks[activeNavLinkIndex].isActive = false;
        }

        copyNavLinks[selectedNavLinkIndex].isActive = true;

        setNavLinks(copyNavLinks);
    }

    const renderNavLink = (nl, index) => (
        <NavLinkItem
            key={nl.src}
            nl={nl}
            index={index}
            changeActiveLink={changeActiveLink}
        />
    );

    return (
        <>
            <header className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.headerInner}>
                        <Logo />
                        <ul className={styles.menuList}>
                            {navLinks.map(renderNavLink)}
                        </ul>
                        <DataTime />
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
