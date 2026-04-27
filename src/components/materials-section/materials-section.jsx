import { materialsImages } from "../../assets/data.js";

export const MaterialsSection = () => {
  const images = materialsImages.map((img) => (
    <img
      key={img}
      src={img.src}
      className={
        img.className.startsWith("mat-big") ? "mat-big" : "m-s " + img.className
      }
    />
  ));
  return (
    <div className="section-materials">
      <div className="grid-container">
        <h2 className="mat-title">ПОДБЕРИ МАТЕРИАЛЫ</h2>
        <div className="mat-info">
          <p>
            Наш чат-бот подскажет необходимую информацию о материалах для вашего
            проекта и поможет выбрать оптимальные варианты
          </p>
          <a href="#" className="btn">
            в чат-бот
          </a>
        </div>
        <div className="mat-visual-grid">{images}</div>
      </div>
    </div>
  );
};
