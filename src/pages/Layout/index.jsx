import React from 'react';
import Header from '../../components/Header';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer';

import styles from './Layout.module.scss';

function Layout () {
    return (
        <div className={styles.container}>
            <Header />

            <Outlet />

            <Footer />
        </div>
    );
}

export default Layout;
