import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <div className="hero">
      <div className="grid-container" style={{ width: "100%" }}>
        <div className="hero-content">
          <p>
            наша платформа – это пространство для тех, кто хочет создавать
            уникальные вещи своими руками
          </p>
          <Link to={"/lessons"} className="btn btn-desktop">
            каталог уроков
          </Link>
          <Link to={"/lessons"} className="btn btn-mobile">
            к урокам
          </Link>
        </div>
      </div>
    </div>
  );
};
