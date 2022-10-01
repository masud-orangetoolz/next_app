import React from 'react';
import styles from "./AppLayout.module.css";

const AppLayout = ({children}) => {
    return (
        <div className={styles.container}>
            <h1 style={{background: "green"}}>Navbar</h1>
            <hr/>
            {children}
        </div>
    );
};

export default AppLayout;