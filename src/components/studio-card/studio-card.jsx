import { useState } from "react";
import { fullStudios } from "../../assets/data";

export const StudioCard = ({ item, isDark }) => {
  const { title, desc, img, link, city, email, website, portfolio } = item;
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  return (
    <>
      <div className="studio-item" onClick={handleOpen}>
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
      {isOpen && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button class="modal-close-btn" onClick={handleClose}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <div className={"studs-left"}>
              <div className="studs-logo">
                <img src={img} className="modal-img" />
                <h2>{title}</h2>
              </div>
              <div className="studs-info">
                <p>{city}</p>
                <p>{email}</p>
                <p>{website}</p>
                <a
                  href={link}
                  className="arrow-icon external-link"
                  target="_blank"
                >
                  <img src="/icons/arrow-icon.svg" alt="arrow-icon" />
                </a>
              </div>
            </div>
            <div className="studs-right-main">
              <h2>Примеры работ</h2>
              <div className="studs-right">
                <img src={portfolio[0]} />
                <div className={"mob"}></div>
                <div className={"mob"}></div>
                <img src={portfolio[1]} />
                <img src={portfolio[2]} />
                <img src={portfolio[3]} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
