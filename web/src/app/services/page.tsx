import type { Metadata } from "next";
import Link from "next/link";
import { clusters } from "@/lib/content";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Услуги",
};

export default function ServicesPage() {
  return (
    <div className={styles.page}>
      <section className={`section ${styles.intro}`}>
        <div className="container">
          <p className="eyebrow">Услуги</p>
          <h1>Каталог экспертизы бюро</h1>
          <p>
            Услуги сгруппированы по направлениям. Выберите тему и перейдите к
            короткому брифу — без корзины и без лишних шагов.
          </p>
          <nav className={styles.subnav} aria-label="Кластеры услуг">
            {clusters.map((c) => (
              <a key={c.id} href={`#${c.id}`}>
                {c.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {clusters.map((cluster) => (
        <section key={cluster.id} id={cluster.id} className={`section ${styles.cluster}`}>
          <div className="container">
            <div className="section-head reveal">
              <h2>{cluster.title}</h2>
              <p>{cluster.lead}</p>
            </div>
            <div className={styles.list}>
              {cluster.services.map((service) => (
                <article key={service.slug} className={`${styles.item} reveal`}>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <Link
                    href={`/contacts?service=${service.slug}#brief`}
                    className="btn btn-ghost btn-on-light"
                  >
                    Обсудить
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
