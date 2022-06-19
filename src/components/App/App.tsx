import React from 'react';
import CatList from "../Cat-list/Cat-list";
import styles from './styles.module.css'

function App() {
  return (
    <div className={styles.app}>
        <main className={styles.main}>
            <h1 className={styles.name}>Ты сегодня покормил кота?</h1>
            <CatList/>
        </main>
    </div>
  );
}

export default App;
