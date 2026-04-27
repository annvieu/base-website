import { fullStudios } from "../../assets/data";

export const StudioCard = ({ item, isDark }) => {
  const { title, desc, img, link } = item;
  return (
    <div className="studio-item">
      <div className="studio-img-wrapper">
        <img src={img} className={`studio-img ${isDark ? "dark" : ""}`} />
      </div>
      <div className="studio-content">
        <div>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
        <a href={link} className="arrow-icon external-link" target="_blank">
          <img src="/icons/arrow-icon.svg" alt="arrow-icon" />
        </a>
      </div>
    </div>
  );
};
