import { mainStudios, fullStudios } from '../utils/data.js';

export class StudiosSection extends HTMLElement {
    connectedCallback() {
        const title = this.getAttribute('title') || 'ЗАКАЖИ У ПРОФЕССИОНАЛОВ';
        const source = this.getAttribute('data-source');
        
        // Выбираем массив данных в зависимости от атрибута
        const data = (source === 'full') ? fullStudios : mainStudios;

        const cardsHTML = data.map(studio => {
            if (studio.isEmpty) return `<div class="studio-item"></div>`;
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
                    <h2 class="studios-title">${title}</h2>
                    <div class="studios-grid">
                        ${cardsHTML}
                    </div>
                </div>
            </section>
        `;
    }
}