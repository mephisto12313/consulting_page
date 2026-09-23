"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { brand } from "@/lib/brand";
import styles from "./Header.module.css";

const links = [
  { href: "/services", label: "Услуги" },
  { href: "/cases", label: "Кейсы" },
  { href: "/about", label: "О нас" },
  { href: "/contacts", label: "Контакты" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const onHome = pathname === "/";

  return (
    <header className={`${styles.header} ${onHome ? styles.onHero : ""}`}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} onClick={() => setOpen(false)}>
          {brand.name}
        </Link>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ""}`} aria-label="Основное меню">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname.startsWith(link.href) ? styles.active : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <a className={styles.phone} href={`tel:${brand.phoneProjectTel}`}>
            {brand.phoneProject}
          </a>
          <Link href="/contacts#brief" className={`btn btn-primary ${styles.cta}`}>
            Оставить заявку
          </Link>
          <Link href="/contacts#callback" className={`btn btn-ghost ${styles.call} ${onHome ? "" : "btn-on-light"}`}>
            Перезвоните
          </Link>
          <button
            type="button"
            className={styles.burger}
            aria-expanded={open}
            aria-label="Меню"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
