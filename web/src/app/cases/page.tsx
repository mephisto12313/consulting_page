import type { Metadata } from "next";
import Link from "next/link";
import { CasesGallery } from "@/components/CasesGallery";
import styles from "./cases.module.css";

export const metadata: Metadata = {
  title: "Кейсы",
};

export default function CasesPage() {
  return (
    <div className={styles.page}>
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Кейсы</p>
            <h1 className={styles.title}>Проекты и вклад бюро</h1>
            <p>Фильтр по типу объекта. Каждый кейс ведёт к разговору о похожей задаче.</p>
          </div>
          <CasesGallery />
          <div className={`${styles.cta} reveal`}>
            <Link href="/contacts#brief" className="btn btn-primary">
              Обсудить проект
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
