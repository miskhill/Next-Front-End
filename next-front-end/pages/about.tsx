import Head from 'next/head'
import styles from '../styles/about.module.css'
import React from "react";

const About: React.FC = () => {
    return (
        <>
            <Head>
                <title className={styles.title}>User List | About</title>
                <meta name="keywords" content="Motorpoint users"/>
            </Head>
            <div>
                <h1 className={styles.title}>About</h1>
                <p className={styles.text}>I added an About page just to show some Nextjs page linking</p>
            </div>
        </>
    );
}

export default About;