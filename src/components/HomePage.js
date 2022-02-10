import React from 'react';

// styles
import styles from "./HomePage.module.css";

// img
import logo from "../image/three.jpg"

const HomePage = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.heafLeft}>
                    <h1 className={styles.firstText}>WELCOME TO SHOP</h1>
                    <h3 className={styles.text}>see store</h3>
                </div>
                <div className={styles.headRight}>
                    <img src={logo} alt="logo" />
                </div>
            </header>
        </div>
    );
};

export default HomePage;