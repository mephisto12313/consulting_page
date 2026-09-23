import Link from "next/link";
import { brand } from "@/lib/brand";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div>
          <p className={styles.brand}>{brand.name}</p>
          <p className={styles.tagline}>{brand.tagline}</p>
        </div>

        <nav className={styles.nav} aria-label="Навигация в подвале">
          <Link href="/services">Услуги</Link>
          <Link href="/cases">Кейсы</Link>
          <Link href="/about">О нас</Link>
          <Link href="/contacts">Контакты</Link>
        </nav>

        <div className={styles.contacts}>
          <p>{brand.address}</p>
          <p>
            Проект:{" "}
            <a href={`tel:${brand.phoneProjectTel}`}>{brand.phoneProject}</a>
            {" · "}
            <a href={`mailto:${brand.emailProject}`}>{brand.emailProject}</a>
          </p>
          <p>
            Сотрудничество:{" "}
            <a href={`mailto:${brand.emailPartner}`}>{brand.emailPartner}</a>
          </p>
          <p>
            Образование:{" "}
            <a href={`mailto:${brand.emailEdu}`}>{brand.emailEdu}</a>
          </p>
        </div>
      </div>
      <div className={`container ${styles.bottom}`}>
        <span>© {new Date().getFullYear()} {brand.name}</span>
        <div className={styles.social}>
          <a href={brand.telegramUrl} aria-label="Telegram">
            Telegram
          </a>
          <a href={brand.youtubeUrl} aria-label="YouTube">
            YouTube
          </a>
          <a href={brand.instagramUrl} aria-label="Instagram">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
