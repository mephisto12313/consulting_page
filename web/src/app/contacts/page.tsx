import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForms } from "@/components/ContactForms";
import { brand } from "@/lib/brand";
import styles from "./contacts.module.css";

export const metadata: Metadata = {
  title: "Контакты",
};

export default function ContactsPage() {
  return (
    <div className={styles.page}>
      <section className="section">
        <div className="container">
          <div className={`section-head reveal`}>
            <p className="eyebrow">Контакты</p>
            <h1 className={styles.title}>Два пути — заявка или звонок</h1>
            <p>
              {brand.address}. Выберите быстрый обратный звонок или короткий бриф
              из шести шагов.
            </p>
          </div>
          <Suspense fallback={<p>Загрузка форм…</p>}>
            <ContactForms />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
