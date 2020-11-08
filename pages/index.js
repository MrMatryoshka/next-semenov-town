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


          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3> Почему Семенов столица золотой Хохломы  &rarr;</h3>
            <p>Легенды происхождения </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Список интересных мест для посещения  &rarr;</h3>
            <p> Достопримечательности района и города </p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3> О Нас &rarr;</h3>
            <p>
              контакты , место находнения.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <h1>Ушаков Кирилл 2020</h1>
      </footer>
    </Layout>
  )
}
