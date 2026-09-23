"use client";

import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { brand } from "@/lib/brand";
import { clusters, segments } from "@/lib/content";
import styles from "./ContactForms.module.css";

const REQUEST_TIMEOUT_MS = 10_000;

async function submitMock(payload: Record<string, unknown>) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    // MVP: имитация отправки с таймаутом 10с. Заменить на API.
    await new Promise<void>((resolve, reject) => {
      const wait = window.setTimeout(() => resolve(), 700);
      controller.signal.addEventListener("abort", () => {
        window.clearTimeout(wait);
        reject(new Error("timeout"));
      });
    });
    console.info("[form submit]", payload);
    return { ok: true as const };
  } finally {
    clearTimeout(timer);
  }
}

export function ContactForms() {
  const searchParams = useSearchParams();
  const presetService = searchParams.get("service") ?? "";

  const serviceOptions = useMemo(
    () =>
      clusters.flatMap((c) =>
        c.services.map((s) => ({ slug: s.slug, title: s.title, cluster: c.title })),
      ),
    [],
  );

  const [callbackStatus, setCallbackStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [briefStep, setBriefStep] = useState(1);
  const [briefStatus, setBriefStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [brief, setBrief] = useState({
    status: "",
    role: "",
    service: presetService,
    object: "",
    task: "",
    name: "",
    phone: "",
    email: "",
  });

  async function onCallback(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setCallbackStatus("loading");
    try {
      await submitMock({
        type: "callback",
        name: fd.get("name"),
        phone: fd.get("phone"),
        time: fd.get("time"),
        comment: fd.get("comment"),
      });
      setCallbackStatus("ok");
      e.currentTarget.reset();
    } catch {
      setCallbackStatus("error");
    }
  }

  async function onBriefFinal(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBriefStatus("loading");
    try {
      const fd = new FormData(e.currentTarget);
      await submitMock({
        type: "brief",
        ...brief,
        name: fd.get("name") || brief.name,
        phone: fd.get("phone") || brief.phone,
        email: fd.get("email") || brief.email,
        fileName: (fd.get("file") as File | null)?.name ?? null,
        consent: fd.get("consent") === "on",
      });
      setBriefStatus("ok");
      setBriefStep(1);
    } catch {
      setBriefStatus("error");
    }
  }

  return (
    <div className={styles.wrap}>
      <section id="callback" className={styles.panel}>
        <p className="eyebrow">Быстрый контакт</p>
        <h2>Перезвоните</h2>
        <p className={styles.lead}>Оставьте телефон — перезвоним и уточним задачу.</p>
        <form className={styles.form} onSubmit={onCallback}>
          <label>
            Имя
            <input name="name" autoComplete="name" />
          </label>
          <label>
            Телефон *
            <input name="phone" type="tel" required autoComplete="tel" />
          </label>
          <label>
            Удобное время
            <input name="time" placeholder="Например, завтра после 15:00" />
          </label>
          <label>
            Комментарий
            <textarea name="comment" rows={3} />
          </label>
          <button className="btn btn-primary" type="submit" disabled={callbackStatus === "loading"}>
            {callbackStatus === "loading" ? "Отправка…" : "Жду звонка"}
          </button>
          {callbackStatus === "ok" && <p className={styles.ok}>Заявка принята. Мы свяжемся с вами.</p>}
          {callbackStatus === "error" && (
            <p className={styles.err}>Не удалось отправить (таймаут или ошибка сети). Попробуйте ещё раз или позвоните.</p>
          )}
        </form>
        <p className={styles.direct}>
          Или сразу:{" "}
          <a href={`tel:${brand.phoneProjectTel}`}>{brand.phoneProject}</a>
          {" · "}
          <a href={`mailto:${brand.emailProject}`}>{brand.emailProject}</a>
        </p>
      </section>

      <section id="brief" className={styles.panel}>
        <p className="eyebrow">Короткий бриф</p>
        <h2>Оставить заявку</h2>
        <p className={styles.lead}>Не больше 6 шагов. Можно сразу перейти к контактам.</p>
        <div className={styles.progress} aria-hidden>
          <span style={{ width: `${(briefStep / 6) * 100}%` }} />
        </div>
        <p className={styles.stepMeta}>Шаг {briefStep} из 6</p>

        {briefStep === 1 && (
          <div className={styles.step}>
            <p className={styles.q}>Ваш статус</p>
            <div className={styles.chips}>
              {segments.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  className={brief.status === s.id ? styles.chipActive : styles.chip}
                  onClick={() => setBrief((b) => ({ ...b, status: s.id }))}
                >
                  {s.title}
                </button>
              ))}
            </div>
            <div className={styles.row}>
              <button type="button" className="btn btn-ghost btn-on-light" onClick={() => setBriefStep(6)}>
                Сразу к контактам
              </button>
              <button
                type="button"
                className="btn btn-primary"
                disabled={!brief.status}
                onClick={() => setBriefStep(2)}
              >
                Далее
              </button>
            </div>
          </div>
        )}

        {briefStep === 2 && (
          <div className={styles.step}>
            <label className={styles.q}>
              Роль / должность
              <input
                value={brief.role}
                onChange={(e) => setBrief((b) => ({ ...b, role: e.target.value }))}
                placeholder="Директор по продукту, собственник…"
              />
            </label>
            <div className={styles.row}>
              <button type="button" className="btn btn-ghost btn-on-light" onClick={() => setBriefStep(1)}>
                Назад
              </button>
              <button type="button" className="btn btn-ghost btn-on-light" onClick={() => setBriefStep(3)}>
                Пропустить
              </button>
              <button type="button" className="btn btn-primary" onClick={() => setBriefStep(3)}>
                Далее
              </button>
            </div>
          </div>
        )}

        {briefStep === 3 && (
          <div className={styles.step}>
            <label className={styles.q}>
              Направление / услуга
              <select
                value={brief.service}
                onChange={(e) => setBrief((b) => ({ ...b, service: e.target.value }))}
              >
                <option value="">Выберите</option>
                {serviceOptions.map((s) => (
                  <option key={s.slug} value={s.slug}>
                    {s.cluster}: {s.title}
                  </option>
                ))}
              </select>
            </label>
            <div className={styles.row}>
              <button type="button" className="btn btn-ghost btn-on-light" onClick={() => setBriefStep(2)}>
                Назад
              </button>
              <button type="button" className="btn btn-ghost btn-on-light" onClick={() => setBriefStep(4)}>
                Нет данных
              </button>
              <button type="button" className="btn btn-primary" onClick={() => setBriefStep(4)}>
                Далее
              </button>
            </div>
          </div>
        )}

        {briefStep === 4 && (
          <div className={styles.step}>
            <label className={styles.q}>
              Объект и локация
              <input
                value={brief.object}
                onChange={(e) => setBrief((b) => ({ ...b, object: e.target.value }))}
                placeholder="Город, тип объекта — или «пока нет»"
              />
            </label>
            <div className={styles.row}>
              <button type="button" className="btn btn-ghost btn-on-light" onClick={() => setBriefStep(3)}>
                Назад
              </button>
              <button type="button" className="btn btn-primary" onClick={() => setBriefStep(5)}>
                Далее
              </button>
            </div>
          </div>
        )}

        {briefStep === 5 && (
          <div className={styles.step}>
            <label className={styles.q}>
              Кратко о задаче
              <textarea
                rows={4}
                value={brief.task}
                onChange={(e) => setBrief((b) => ({ ...b, task: e.target.value }))}
                placeholder="Что нужно решить?"
              />
            </label>
            <div className={styles.row}>
              <button type="button" className="btn btn-ghost btn-on-light" onClick={() => setBriefStep(4)}>
                Назад
              </button>
              <button type="button" className="btn btn-primary" onClick={() => setBriefStep(6)}>
                К контактам
              </button>
            </div>
          </div>
        )}

        {briefStep === 6 && (
          <form className={styles.step} onSubmit={onBriefFinal}>
            <label>
              Имя *
              <input
                name="name"
                required
                value={brief.name}
                onChange={(e) => setBrief((b) => ({ ...b, name: e.target.value }))}
              />
            </label>
            <label>
              Телефон *
              <input
                name="phone"
                type="tel"
                required
                value={brief.phone}
                onChange={(e) => setBrief((b) => ({ ...b, phone: e.target.value }))}
              />
            </label>
            <label>
              Email
              <input
                name="email"
                type="email"
                value={brief.email}
                onChange={(e) => setBrief((b) => ({ ...b, email: e.target.value }))}
              />
            </label>
            <label>
              Файл (опционально)
              <input name="file" type="file" />
            </label>
            <label className={styles.check}>
              <input name="consent" type="checkbox" required />
              Согласен на обработку персональных данных
            </label>
            <div className={styles.row}>
              <button type="button" className="btn btn-ghost btn-on-light" onClick={() => setBriefStep(5)}>
                Назад
              </button>
              <button className="btn btn-primary" type="submit" disabled={briefStatus === "loading"}>
                {briefStatus === "loading" ? "Отправка…" : "Отправить бриф"}
              </button>
            </div>
            {briefStatus === "ok" && <p className={styles.ok}>Бриф отправлен. Спасибо!</p>}
            {briefStatus === "error" && (
              <p className={styles.err}>Ошибка отправки (таймаут 10с или сеть). Попробуйте снова.</p>
            )}
          </form>
        )}
      </section>
    </div>
  );
}
