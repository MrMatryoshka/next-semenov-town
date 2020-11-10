// @ts-ignore
import styles from '../styles/Home.module.scss'
import Link from "next/link";
import {Layout} from "../components/layout";
import React from "react";

export default function Home() {
    return (
    <Layout title={"Semenov town"}>

      <main >
        <h1 className={styles.title}>
           Маленький <a href="https://semenov.nnov.ru/">Париж !</a>
        </h1>

        <div className={styles.grid}>
          <Link href={`/town/semenov`}>
            <a className={styles.card}>
              <h3>Особенности нашего города  &rarr;</h3>
              <p>Маленькие истории  </p>
            </a>
          </Link>

          <Link href={'/hohloma/hohloma'}>
            <a className={styles.card}>
              <h3> Почему Семенов столица золотой Хохломы ?  &rarr;</h3>
              <p>Легенды происхождения </p>
            </a>
          </Link>

        </div>
      </main>

      <footer className={styles.footer}>
        <h1>Ушаков Кирилл 2020</h1>
      </footer>
    </Layout>
  )
}
