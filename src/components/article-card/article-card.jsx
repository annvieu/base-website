import { Link } from "react-router-dom";

export const ArticleCard = ({ item }) => {
  const { id, path, title, time, img, level, layout } = item;
  const levelText = level === "novice" ? "для новичков" : "для продвинутых";
  const levelClass = level === "novice" ? "tag-novice" : "tag-pro";
  if (!title && !img) {
    return <div className={`"article-card ${layout} empty`}></div>;
  }
  if (layout === "vertical") {
    return (
      <Link to={`/lesson?id=${path}`} className="article-card-link">
        <div className="article-card vertical">
          <div className="article-img-wrapper">
            <img src={img} alt={title} />
          </div>
          <div className="article-footer">
            <img src="icons/book-icon.svg" alt="time" className="book-icon" />
            <span className="time-text">{time} мин</span>
          </div>
          <div className="article-header">
            <h3>{title}</h3>
            <span className="article-tag ${levelClass}">{levelText}</span>
          </div>
        </div>
      </Link>
    );
  }
  return (
    <Link to={`/lesson?id=${path}`} className="article-card-link">
      <div className="article-card horizontal">
        <div className="article-img-wrapper">
          <img src={img} alt={title} />
        </div>
        <div className="article-info">
          <div className="article-footer">
            <img src="/icons/book-icon.svg" alt="time" className="book-icon" />
            <span className="time-text">{time} мин</span>
          </div>
          <div className="article-text-bottom">
            <h3>{title}</h3>
            <span className="article-tag ${levelClass}">{levelText}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
