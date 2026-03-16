import { mainStudios, fullStudios } from '../utils/data.js';

export class StudiosSection extends HTMLElement {
    connectedCallback() {
        const title = this.getAttribute('title') || 'ЗАКАЖИ У ПРОФЕССИОНАЛОВ';
        const source = this.getAttribute('data-source');
        
        const titleStyle = (source === 'full') ? "main-title" : "studios-title";
        const data = (source === 'full') ? fullStudios : mainStudios;

        const cardsHTML = data.map(studio => {
            // Если карточка пустая
            if (studio.isEmpty) return `<div class="studio-item isEmpty"></div>`;
            
            // Превращаем массив портфолио из data.js в строку для HTML
            // Если портфолио нет, передаем пустой массив
            const portfolioStr = JSON.stringify(studio.portfolio || []);

            // ВАЖНО: Добавляем ВСЕ недостающие атрибуты (city, email, website, portfolio)
            // Для portfolio используем одинарные кавычки (' '), чтобы не сломать JSON
            return `
                <studio-card 
                    title="${studio.title || ''}" 
                    desc="${studio.desc || ''}" 
                    img="${studio.img || ''}" 
                    link="${studio.link || ''}"
                    city="${studio.city || ''}"
                    email="${studio.email || ''}"
                    website="${studio.website || ''}"
                    portfolio='${portfolioStr}'
                    ${studio.isDark ? 'dark' : ''}
                ></studio-card>
            `;
        }).join('');

        this.innerHTML = `
            <section class="section-studios">
                <div class="grid-container">
                    <h2 class="${titleStyle}">${title}</h2>
                    <div class="studios-grid">
                        ${cardsHTML}
                    </div>
                </div>
            </section>
        `;
    }
}