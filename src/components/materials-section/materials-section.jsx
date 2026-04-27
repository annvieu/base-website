import { Link } from "react-router-dom";
import { materialsImages } from "../../assets/data.js";

export const MaterialsSection = () => {
  const images = materialsImages.map((img) => (
    <img
      key={img}
      src={img.src}
      className={
        img?.class?.startsWith("mat-big") ? "mat-big" : "m-s " + img.class
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
          <Link to="/bot" className="btn">
            в чат-бот
          </Link>
        </div>
        <div className="mat-visual-grid">{images}</div>
      </div>
    </div>
  );
};
