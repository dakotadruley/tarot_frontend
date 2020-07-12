import React from 'react';
import styles from './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import CardForm from '../CardForm/CardForm';
import Home from '../Home/Home';

export default function App() {
  return (
    <>
    <Router className={styles.App}>
      <Switch>
        <Link exact path ='/' component={Home}/>
        <Link exact path ='/createCard' component={CardForm} />
      </Switch>
    </Router>
    </>
  );
}
  