import React from 'react';
import { Link } from 'react-router';

import styles from './Logo.module.scss';

function Logo () {
    return (
        <div className={styles.logoContainer}>
            <Link className={styles.logoLink} to='/'>
                LOGO
            </Link>
        </div>
    );
}

export default Logo;
