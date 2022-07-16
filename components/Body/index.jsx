import React from 'react';

import styles from './styles.module.css';

export default function Body() {
  return (
    <main className={styles.main}>
      <section></section>
      <div className={styles.mainImageContainer}>
        <img src='img/programacion-gratuitos.jpeg' alt='Aprende programación con cursos' />
      </div>
      <div className={styles.changeImageContainer}>
        <button className={styles.btnImage}>1</button>
        <button className={styles.btnImage}>2</button>
      </div>
      <section className={styles.presentationContainer}>
        <h2 className={styles.subtitle}>Quienes somos</h2>
        <h3 className={styles.description}>Empresa dedicada al sector educativo relacionada a la tecnología</h3>
      </section>
      <section className={styles.linksContainer}>
        <a href='#Soporte' className={styles.btnLinks}>
          Soporte
        </a>
        <a href='#Capacitacion' className={styles.btnLinks}>
          Capacitación
        </a>
        <a href='#Tutoriales' className={styles.btnLinks}>
          Tutoriales
        </a>
      </section>
      <section className={styles.formContainer}>
        <h3 className={styles.formTitle}>Contactanos</h3>
        <form action='' className={styles.form}>
          <div className={styles.inputContainer}>
            <label htmlFor='name' className={styles.inputLabel}>
              Nombre
            </label>
            <input id='name' className={styles.input} type='text' placeholder='Nombre' />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor='email' className={styles.inputLabel}>
              Email
            </label>
            <input id='email' className={styles.input} type='email' placeholder='Email' />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor='message' className={styles.inputLabel}>
              Mensaje
            </label>
            <input id='message' className={styles.input} type='text' placeholder='Mensaje' />
          </div>
          <button type='submit' className={styles.btnSubmit}>
            Enviar
          </button>
        </form>
      </section>
    </main>
  );
}
