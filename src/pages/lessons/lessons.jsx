import { useState } from "react";
import { ArticlesSection } from "../../components/article-section/article-section";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";

export const LessonsPage = () => {
  const [active, setActive] = useState([]);
  const filterAtticles = (changed) => {
    if (!active.includes(changed)) {
      setActive((prev) => [...prev, changed]);
      return;
    }
    setActive((prev) => prev.filter((item) => item !== changed) || []);
  };
  return (
    <>
      <Header theme="dark" />
      <main className="lessons-page">
        <aside className="lessons-sidebar">
          <h2 className="main-title">УРОКИ</h2>
          <ul className="lessons-filters">
            <li className="active">все</li>
            <li
              className={`filter-item novice ${active.includes("novice") ? "active" : ""}`}
              onClick={() => filterAtticles("novice")}
            >
              <span className="checkbox "></span> для новичков
            </li>
            <li
              className={`filter-item pro ${active.includes("pro") ? "active" : ""}`}
              onClick={() => filterAtticles("pro")}
            >
              <span className="checkbox"></span> для продвинутых
            </li>
          </ul>
        </aside>

        <div className="lessons-content">
          <ArticlesSection filter={active} />
        </div>
      </main>
      <Footer />
    </>
  );
};
