import React from 'react';
import Home from 'components/Icons/Home';
import Users from 'components/Icons/Users';
import Book from 'components/Icons/Book';
import User from 'components/Icons/User';

import styles from './styles.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.containerLogo}>
        <img src='img/logo_umg.png' alt='Logo de la UMG' className={styles.logo} />
      </div>
      <nav className={styles.nav}>
        <a href='#Inicio' className={styles.link}>
          Inicio <Home />
        </a>
        <a href='#Inicio' className={styles.link}>
          Cursos <Users />{' '}
        </a>
        <a href='#Inicio' className={styles.link}>
          Tutoriales <Book />{' '}
        </a>
        <a href='#Inicio' className={styles.link}>
          Contacto <User />
        </a>
      </nav>
    </header>
  );
}
