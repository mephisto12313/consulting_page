"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { caseTypes, cases } from "@/lib/content";
import styles from "./CasesGallery.module.css";

export function CasesGallery() {
  const [type, setType] = useState("Все");
  const filtered = useMemo(
    () => (type === "Все" ? cases : cases.filter((c) => c.type === type)),
    [type],
  );

  return (
    <div>
      <div className={styles.filters} role="tablist" aria-label="Тип кейса">
        {caseTypes.map((t) => (
          <button
            key={t}
            type="button"
            role="tab"
            aria-selected={type === t}
            className={type === t ? styles.filterActive : styles.filter}
            onClick={() => setType(t)}
          >
            {t}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filtered.map((item) => (
          <article key={item.slug} className={`${styles.card} reveal`}>
            <div className={styles.media}>
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className={styles.body}>
              <p className={styles.type}>{item.type}</p>
              <h3>{item.title}</h3>
              <p>{item.contribution}</p>
              <div className={styles.tags}>
                {item.services.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
              <Link href={`/contacts?service=${item.slug}#brief`} className="btn btn-ghost btn-on-light">
                Обсудить похожий проект
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
