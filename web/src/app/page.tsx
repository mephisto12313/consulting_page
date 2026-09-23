import Image from "next/image";
import Link from "next/link";
import { brand } from "@/lib/brand";
import {
  directions,
  heroImage,
  proofStats,
  cases,
  segments,
} from "@/lib/content";
import styles from "./page.module.css";

export default function HomePage() {
  const featured = cases.slice(0, 3);

  return (
    <>
      <section className={styles.hero}>
        <Image
          src={heroImage}
          alt="Городская застройка и территория развития"
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />
        <div className={styles.heroShade} />
        <div className={`container ${styles.heroContent}`}>
          <p className={styles.brand}>{brand.name}</p>
          <h1>Программируем будущее территорий</h1>
          <p className={styles.support}>{brand.tagline}</p>
          <div className={styles.ctaRow}>
            <Link href="/contacts#brief" className="btn btn-primary">
              Оставить заявку
            </Link>
            <Link href="/contacts#callback" className="btn btn-ghost">
              Перезвоните
            </Link>
          </div>
        </div>
      </section>

      <section className={`section ${styles.audiences}`}>
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Для кого</p>
            <h2>Работаем с теми, кто принимает решения о территории и продукте</h2>
            <p>Шесть сегментов — один вход в разговор о вашей задаче.</p>
          </div>
          <ul className={styles.audienceList}>
            {segments.map((s) => (
              <li key={s.id} className="reveal">
                <Link href={`/services?audience=${s.id}`}>
                  <span>{s.title}</span>
                  <small>{s.benefit}</small>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`section ${styles.directions}`}>
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Направления</p>
            <h2>Шесть линий экспертизы</h2>
            <p>Полный каталог услуг — на отдельной странице, без сетки из десятков карточек здесь.</p>
          </div>
          <div className={styles.dirGrid}>
            {directions.map((d, i) => (
              <Link
                key={d.id}
                href={`/services#${d.id}`}
                className={`${styles.dirItem} reveal`}
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <span className={styles.dirIndex}>{String(i + 1).padStart(2, "0")}</span>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </Link>
            ))}
          </div>
          <div className={`${styles.more} reveal`}>
            <Link href="/services" className="btn btn-ghost btn-on-light">
              Все услуги
            </Link>
          </div>
        </div>
      </section>

      <section className={`section ${styles.proof}`}>
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Доказательства</p>
            <h2>Цифры бюро</h2>
            <p>Метрики-плейсхолдеры — заменить на подтверждённые перед запуском.</p>
          </div>
          <div className={styles.stats}>
            {proofStats.map((s) => (
              <div key={s.label} className="reveal">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.cases}`}>
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Кейсы</p>
            <h2>Избранные проекты</h2>
            <p>Вклад бюро на реальных объектах и территориях.</p>
          </div>
          <div className={styles.caseGrid}>
            {featured.map((c) => (
              <article key={c.slug} className={`${styles.caseCard} reveal`}>
                <div className={styles.caseMedia}>
                  <Image src={c.image} alt={c.title} fill sizes="(max-width:768px) 100vw, 33vw" />
                </div>
                <div className={styles.caseBody}>
                  <h3>{c.title}</h3>
                  <p>{c.contribution}</p>
                </div>
              </article>
            ))}
          </div>
          <div className={`${styles.more} reveal`}>
            <Link href="/cases" className="btn btn-ghost btn-on-light">
              Все кейсы
            </Link>
          </div>
        </div>
      </section>

      <section className={`section ${styles.ctaBand}`}>
        <div className={`container ${styles.ctaInner} reveal`}>
          <div>
            <p className="eyebrow">Следующий шаг</p>
            <h2>Обсудим ваш объект или территорию</h2>
            <p>Короткий бриф или обратный звонок — без корзины услуг и без длинного квиза.</p>
          </div>
          <div className={styles.ctaRow}>
            <Link href="/contacts#brief" className="btn btn-primary">
              Оставить заявку
            </Link>
            <a href={`tel:${brand.phoneProjectTel}`} className="btn btn-ghost">
              Позвонить
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
