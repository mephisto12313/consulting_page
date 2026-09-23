import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { brand } from "@/lib/brand";
import { leaders, missionImage, team } from "@/lib/content";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "О нас",
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <section className={`section ${styles.mission}`}>
        <div className="container">
          <div className={styles.missionGrid}>
            <div className="reveal">
              <p className="eyebrow">О нас</p>
              <h1>Собираем экспертизу вокруг продукта территории</h1>
              <p>
                {brand.name} — консалтинговое бюро, которое соединяет исследования,
                продукт, архитектуру среды и операционные практики девелопмента.
                Мы помогаем заказчику принимать точные решения на каждом этапе —
                от участка до эксплуатации.
              </p>
            </div>
            <div className={`${styles.missionMedia} reveal`}>
              <Image
                src={missionImage}
                alt="Команда бюро в рабочей среде"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.leaders}`}>
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Команда</p>
            <h2>Ядро бюро</h2>
            <p>Ключевые роли, с которых начинается проектный контур.</p>
          </div>
          <div className={styles.leaderGrid}>
            {leaders.map((m) => (
              <article key={m.name} className="reveal">
                <div className={styles.avatar} aria-hidden />
                <h3>{m.name}</h3>
                <p className={styles.role}>{m.role}</p>
                <p className={styles.focus}>{m.focus}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.team}`}>
        <div className="container">
          <div className="section-head reveal">
            <h2>Вся команда</h2>
            <p>Руководители проектов и направлений.</p>
          </div>
          <ul className={styles.teamList}>
            {team.map((m) => (
              <li key={m.name} className="reveal">
                <strong>{m.name}</strong>
                <span>{m.role}</span>
                <em>{m.focus}</em>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`section ${styles.cta}`}>
        <div className={`container reveal`}>
          <h2>Сотрудничество</h2>
          <p>Предложите партнёрство или стажировку — ответим по направлению.</p>
          <Link href="/contacts#brief" className="btn btn-primary">
            Написать нам
          </Link>
        </div>
      </section>
    </div>
  );
}
