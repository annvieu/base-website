import { useSearchParams } from "react-router-dom";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { lessons } from "../../assets/data";
import styles from "./LessonPage.module.css";

export const LessonPage = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const lesson = lessons.find((lesson) => lesson.id === id) || {};
  return (
    <>
      <Header theme="dark" />

      <main className={styles.page}>
        <div className={styles.hero}>
          <div className={styles.hero_left}>
            <div className={styles.hero_title}>
              <h2>{lesson.title}</h2>
              <span className={styles.hero_level}>для {lesson.level}</span>
            </div>
            <img
              src={lesson.heroImage}
              alt="Вышивка на куртке"
              className={styles.hero_img_mobile}
            />
            <div className={styles.hero_tools}>
              {lesson.tools.map((item) => (
                <div key={item.name} className={styles.hero_tool}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className={styles.tool_img}
                  />
                  <span className={styles.tool_text}>{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.hero_right}>
            <img
              src={lesson.heroImage}
              alt="Вышивка на куртке"
              className={styles.hero_img}
            />
          </div>
        </div>

        <div className={styles.intro}>
          <div></div>
          <p className={styles.intro_text}>{lesson.intro}</p>
        </div>
        {[lesson.steps[0]].map((item) => (
          <div key={item.title} className={styles.card}>
            <div>
              {item.image ? (
                <img src={item.image} alt={item.title} className={styles.img} />
              ) : (
                <></>
              )}
            </div>
            <div className={styles.card_info}>
              <h2>{item.title}</h2>
              <div className={styles.card_text}>
                {item.text.map((text) => (
                  <p>{text}</p>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className={styles.advice}>
          <h2>СОВЕТ</h2>

          <div className={styles.advice_text}>
            <p>{lesson.advice}</p>
          </div>
        </div>
        {[lesson.steps[1]].map((item) => (
          <div key={item.title} className={styles.card}>
            <div>
              {item.image ? (
                <img src={item.image} alt={item.title} className={styles.img} />
              ) : (
                <></>
              )}
            </div>
            <div className={styles.card_info}>
              <h2>{item.title}</h2>
              <div className={styles.card_text}>
                {item.text.map((text) => (
                  <p>{text}</p>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className={styles.errors}>
          <div className={styles.errors_title}>
            <h2>ТИПИЧНЫЕ ОШИБКИ</h2>
          </div>
          <div className={styles.errors_info}>
            {lesson.errors.map((err) => (
              <p key={err} className={styles.errors_info_text}>
                {err}
              </p>
            ))}
          </div>
        </div>

        {lesson.steps.slice(2, 4).map((item) => (
          <div key={item.title} className={styles.card}>
            <div>
              {item.image ? (
                <img src={item.image} alt={item.title} className={styles.img} />
              ) : (
                <></>
              )}{" "}
            </div>
            <div className={styles.card_info}>
              <h2>{item.title}</h2>
              <div className={styles.card_text}>
                {item.text.map((text) => (
                  <p>{text}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
        <div className={styles.examples}>
          <div className="examples-header">
            <h2>ПРИМЕРЫ РАБОТ</h2>
          </div>

          <div className="examples-grid">
            <img
              src={lesson.examples[0]}
              alt="Губы"
              class="example-item img-lips"
            />
            <img
              src={lesson.examples[1]}
              alt="Ремешок"
              class="example-item img-strap"
            />
            <img
              src={lesson.examples[2]}
              alt="Слова"
              class="example-item img-words"
            />
            <img
              src={lesson.examples[3]}
              alt="Худи"
              class="example-item img-hoodie"
            />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};
