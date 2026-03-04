export class StudioCard extends HTMLElement {
    connectedCallback() {
        const title = this.getAttribute('title');
        const desc = this.getAttribute('desc');
        const img = this.getAttribute('img');
        const link = this.getAttribute('link');
        const isDark = this.hasAttribute('dark') ? 'dark' : '';

        this.innerHTML = `
            <div class="studio-item">
                <div class="studio-img-wrapper">
                    <img src="${img}" class="studio-img ${isDark}">
                </div>
                <div class="studio-content">
                    <div>
                        <h3>${title}</h3>
                        <p>${desc}</p>
                    </div>
                    <a href="${link}" class="arrow-icon" target="_blank">
                        <img src="/icons/arrow-icon.svg" alt="arrow-icon">
                    </a>
                </div>
            </div>
        `;
    }
}