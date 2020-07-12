import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

const Home = () => {

    return (
        <section className={styles.Home}>
        <h1>Tarot</h1>
        <nav>
            <h3><Link to='/createCard'>Create A Card</Link></h3>
        </nav>
     
        </section>
    
)};

export default Home;