import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="grid-container">
        <a href="https://t.me/nobases" className="f-1">
          <img src="/icons/tg-icon.svg" width="47" />
        </a>
        <a href="https://t.me/nobases" className="f-2">
          связаться
        </a>
        <Link to="/about" className="f-3">
          о проекте
        </Link>
        <a src="#" className="f-8">
          правовая информация
        </a>
        <p className="f-10">© no base 2026</p>
      </div>
    </footer>
  );
};
