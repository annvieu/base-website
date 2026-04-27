import { trendsImages } from "../../assets/data";

export const TrendsSection = () => {
  const imagesHTML = trendsImages.map((img) => (
    <img src={img.src} className={`tr-img ${img.class}`} key={img} />
  ));

  return (
    <div className="section-trends">
      <div className="grid-container">
        <h2 className="trends-title">ВДОХНОВИСЬ ТРЕНДАМИ</h2>
        <p className="trends-text">
          собрали самые свежие тенденции в мире кастомизации. Узнай, что сейчас
          модно и как применить новые идеи, чтобы сделать свой стиль уникальным
          и современным
        </p>
        <div className="trends-visual-grid">{imagesHTML}</div>
      </div>
    </div>
  );
};
