export class JoinSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section class="join-section">
                <div class="grid-container">
                    <img src="images/wall.jpg" class="join-image">
                    <h2 class="join-title">ПРИСОЕДИНЯЙСЯ К НАМ</h2>
                    <div class="join-info">
                        <p>Telegram-канал с горячими трендами, подборками новых коллекций для вдохновения и для общения в тусовке</p>
                        <a href="https://t.me/nobases" class="tg-link">
                            <img src="icons/tg-icon.svg" alt="tg-icon"> @nobases
                        </a>
                    </div>
                </div>
            </section>
        `;
    }
}