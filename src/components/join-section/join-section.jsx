export const JoinSection = () => {
  return (
    <div className="join-section">
      <div className="grid-container">
        <img src="images/wall.jpg" className="join-image" />
        <h2 className="join-title">ПРИСОЕДИНЯЙСЯ К НАМ</h2>
        <div className="join-info">
          <p>
            Telegram-канал с горячими трендами, подборками новых коллекций для
            вдохновения и для общения в тусовке
          </p>
          <a href="https://t.me/nobases" className="tg-link">
            <img src="icons/tg-icon.svg" alt="tg-icon" /> @nobases
          </a>
        </div>
      </div>
    </div>
  );
};
