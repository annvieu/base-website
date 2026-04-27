import { Link } from "react-router-dom";

export const Header = ({ isMain }) => {
  return (
    <div className={`header ${!isMain ? "dark-text" : ""}`}>
      <div className="grid-container">
        <Link to={"/"} className="nav-item-1">
          <img
            src={!isMain ? "icons/logo-dark.svg" : "/icons/logo.svg"}
            alt="BASE LOGO"
          />
        </Link>
        <Link to={"/lessons"} className="nav-item-2">
          уроки
        </Link>
        <Link to={"/trends"} className="nav-item-3">
          тренды
        </Link>
        <Link to={"/studios"} className="nav-item-4">
          студии
        </Link>
        <Link to={"/bot"} className="nav-item-5">
          бот
        </Link>
      </div>
    </div>
  );
};
