import { fullStudios, mainStudios } from "../../assets/data";
import { StudioCard } from "../studio-card/studio-card.jsx";

export const StudiosSection = ({ title, source }) => {
  const titleStyle = source === "full" ? "main-title" : "studios-title";
  const data = source === "full" ? fullStudios : mainStudios;

  const cardsHTML = data.map((studio) => {
    return;
    <StudioCard
      key={studio.title}
      item={studio}
      isDark={studio.isDark ? "dark" : ""}
    ></StudioCard>;
  });

  return (
    <div className="section-studios">
      <div className="grid-container">
        <h2 className={titleStyle}>{title || "ЗАКАЖИ У ПРОФЕССИОНАЛОВ"}</h2>
        <div className="studios-grid">
          {(source === "full" ? fullStudios : mainStudios).map((st) => {
            if (st.isEmpty) {
              return <div class="studio-item isEmpty"></div>;
            }

            return (
              <StudioCard
                key={st.title}
                item={st}
                isDark={st.isDark ? "dark" : ""}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
