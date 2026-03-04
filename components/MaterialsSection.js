import { materialsImages } from '../utils/data.js';

export class MaterialsSection extends HTMLElement {
    connectedCallback() {
        const imagesHTML = materialsImages.map(img => 
            `<img src="${img.src}" class="${img.class.startsWith('mat-big') ? 'mat-big' : 'm-s ' + img.class}">`
        ).join('');

        this.innerHTML = `
            <section class="section-materials">
                <div class="grid-container">
                    <h2 class="mat-title">ПОДБЕРИ МАТЕРИАЛЫ</h2>
                    <div class="mat-info">
                        <p>Наш чат-бот подскажет необходимую информацию о материалах для вашего проекта и поможет выбрать оптимальные варианты</p>
                        <div style="display: grid; grid-template-columns: repeat(6, 1fr);">
                            <a href="#" class="btn" style="grid-column: 1;">в чат-бот</a>
                        </div>
                    </div>
                    <div class="mat-visual-grid">${imagesHTML}</div>
                </div>
            </section>
        `;
    }
}