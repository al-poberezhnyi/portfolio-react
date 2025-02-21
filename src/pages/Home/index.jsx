import React from 'react';

import styles from './Home.module.scss';

function Home () {
    return (
        <>
            <main className={styles.home}>
                <div className={styles.container}>
                    <div className={styles.hero}>
                        <div>
                            <p>Hi, I am</p>
                            <p>Tomasz Gajda</p>
                            <h1>Front-end Developer / UI Designer</h1>
                            <div>
                                <a href='#'></a>
                                <a href='#'></a>
                                <a href='#'></a>
                            </div>
                        </div>
                        <div>
                            <img src='./user_photo.jpg' alt='user-photo' />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Home;
