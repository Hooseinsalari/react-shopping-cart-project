import React from 'react';

// style
import styles from "./Loading.module.css"

const Loading = () => {
    return (
        <div className={styles.container}>
            <h3 style={{"margin": "10px"}}>Loading</h3>
            <div className={styles.loader}></div>
        </div>
    );
};

export default Loading;