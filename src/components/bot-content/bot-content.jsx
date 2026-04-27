import { useState } from "react";
import styles from "./BotContent.module.css";
import { Loader } from "../loader/loader";
import { combs, decors, types } from "./data";
import { Link } from "react-router-dom";

const steps = {
  1: "Шаг 1. Тип изделия",
  2: "Шаг 2. Вид декора",
  3: "Шаг 2. Вид декора",
  4: "Итог. ПОДБОР материалов",
  5: "Итог. ПОДБОР материалов",
};

export const BotContent = () => {
  const [percent, setPercent] = useState(20);
  const [step, setStep] = useState(1);
  const [step1, setStep1] = useState();
  const [step2, setStep2] = useState();
  const handleSetStep2 = (value) => {
    setStep1(value);
    setStep(2);
    setPercent(70);
  };
  const handleBack = () => {
    if (step === 2) {
      setPercent(20);
      setStep1(null);
      setStep(1);
      return;
    }
    if (step === 4) {
      setPercent(70);
      setStep2(null);
      setStep(3);
      return;
    }
    if (step === 5) {
      setPercent(70);
      setStep(4);
      return;
    }
    setStep(2);
  };
  const handleSetStep3 = () => {
    setStep(3);
  };

  const handleSetStep4 = (value) => {
    setStep2(value);
    setStep(4);
  };

  const handleSetStep5 = (value) => {
    setStep(5);
    setPercent(100);
  };
  const getItem = () => {
    if (!step2 || !step2.value || !step1 || !step1.label) return;
    const item = combs.find(
      (i) => i.type === step1.label && i.dec === step2.value,
    );
    return (
      <>
        <span>
          <span className={styles.upper}>Основной декоративный материал:</span>{" "}
          {item.material}
        </span>
        <br />
        <span>
          <span className={styles.upper}> Состав и характеристики:</span>{" "}
          {item.material}
        </span>
        <br />
        <span>
          <span className={styles.upper}>Основные свойства:</span> {item.chars}
        </span>{" "}
        <br />
        <span>
          <span className={styles.upper}> Совместимость с тканями:</span>{" "}
          {item.compatibility}
        </span>
        <br />
        <span>
          {" "}
          <span className={styles.upper}>Рекомендации:</span>{" "}
          {item.recomendations}
        </span>
        <br />
        <span>
          <span className={styles.upper}> Уход:</span> {item.care}
        </span>{" "}
      </>
    );
  };

  const getLesson = () => {
    if (!step2 || !step2.value) return;
    const less = decors.find((i) => i.value === step2.value);
    return (
      <Link
        to={less.cardLink}
        className={`${styles.lesson} ${step === 5 ? styles.lessonStep5 : ""}`}
      >
        <img src={step2.cardimg} alt={step2.lessonName} />
        Посмотрите урок: {step2.lessonName}
      </Link>
    );
  };
  return (
    <div className={styles.page}>
      <h2 className={styles.title}>БОТ-КОНСТРУКТОР</h2>
      <div className={styles.content}>
        <div className={styles.chat}>
          <p className={`${styles.p} ${step !== 1 ? styles.hide : ""}`}>
            эксперт по материалам для кастомизации, сгенерирует чек-лист всего
            необходимого именно для вашего проекта
          </p>
          <div
            className={`${styles.message1} ${step !== 1 ? (step === 2 ? styles.message1Step2 : styles.message1Step3) : ""}`}
          >
            привет! выбери тип изделия и я помогу подобрать материалы для
            кастомизации
          </div>

          <div
            className={`${styles.message2} ${step === 2 ? styles.message2Step2 : step === 3 ? styles.message2Step3 : step === 4 ? styles.message2Step4 : step === 5 ? styles.message2Step4 : ""}`}
          >
            какой вид декора планируешь сделать?
          </div>

          <div
            className={`${styles.message3} ${step === 4 ? styles.message3Step4 : step === 5 ? styles.message3Step5 : ""}`}
          >
            информация по материалам:
          </div>
          <div
            className={`${styles.final} ${step === 5 ? styles.final_5 : ""}`}
          >
            <div
              className={`${styles.message4} ${step === 5 ? styles.message4Step5 : ""}`}
            >
              {getItem()}
            </div>
            {getLesson()}
          </div>

          <div
            className={`${styles.variants} ${step !== 1 ? styles.variantsStep2 : ""}`}
          >
            {types.map((item) => (
              <div
                className={styles.variant}
                onClick={() => handleSetStep2(item)}
              >
                <img src={`/images/chat/${item.img}.png`} />
                <p>{item.value}</p>
              </div>
            ))}
          </div>
          <div
            className={`${styles.variantsDeck} ${step === 3 ? styles.variantsDeckStep3 : ""}`}
          >
            {decors.map((item) => (
              <div
                className={styles.variant}
                onClick={() => handleSetStep4(item)}
              >
                <img src={`/images/chat/${item.img}.png`} />
                <p>{item.label}</p>
              </div>
            ))}
          </div>
          <div
            className={`${styles.step1Selected} ${step === 2 ? styles.step1SelectedStep2 : step === 3 ? styles.step1SelectedStep3 : ""}`}
            onClick={() => handleSetStep3()}
          >
            <img src={`/images/chat/${step1?.img || ""}.png`} />
            <p>{step1?.value || ""}</p>
          </div>

          <div
            className={`${styles.step2Selected} ${step === 4 ? styles.step2SelectedStep4 : ""}`}
            onClick={() => handleSetStep5()}
          >
            <img src={`/images/chat/${step2?.img || ""}.png`} />
            <p>{step2?.label || ""}</p>
          </div>
        </div>
        <div className={styles.footer}>
          <Loader value={percent} />
          <div className={styles.footer_act}>
            <button
              className={`${styles.button} ${step === 1 ? styles.invisible : ""}`}
              onClick={() => handleBack()}
            >
              назад
            </button>
            <h2>{steps[step]}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
