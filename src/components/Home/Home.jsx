import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

const Home = () => {

    return (
        <>
        <h1 className={styles.Home}>Tarot</h1>
        <Link to='/createCard'>Create A Card</Link>
        </>
    
)};

export default Home;