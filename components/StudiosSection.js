import { studiosData } from '../utils/data.js';

export class StudiosSection extends HTMLElement {
    connectedCallback() {
        const cardsHTML = studiosData.map(studio => {
            if (studio.isEmpty) {
                return `<div class="studio-item"></div>`;
            }
            return `
                <studio-card 
                    title="${studio.title}" 
                    desc="${studio.desc}" 
                    img="${studio.img}" 
                    link="${studio.link}"
                    ${studio.isDark ? 'dark' : ''}
                ></studio-card>
            `;
        }).join('');

        this.innerHTML = `
            <section class="section-studios">
                <div class="grid-container">
                    <h2 class="studios-title">ЗАКАЖИ У ПРОФЕССИОНАЛОВ</h2>
                    <div class="studios-grid">
                        ${cardsHTML}
                    </div>
                </div>
            </section>
        `;
    }
}