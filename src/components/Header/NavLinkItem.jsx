import React from 'react';
import { NavLink } from 'react-router';

import styles from './Header.module.scss';
import classNames from 'classnames';

function NavLinkItem ({ nl, index, changeActiveLink }) {
    const navLinkstyles = classNames(styles.menuLink, {
        [styles.activeLink]: nl.isActive,
    });

    const linkHandler = () => {
        changeActiveLink(index);
    };

    return (
        <li className={styles.menuItem}>
            <NavLink
                className={navLinkstyles}
                onClick={linkHandler}
                to={nl.link}
            >
                <img className={styles.img} src={nl.src} alt='' />
                {nl.menuItem}
            </NavLink>
        </li>
    );
}

export default NavLinkItem;
