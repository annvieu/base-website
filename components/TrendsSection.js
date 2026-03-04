import { trendsImages } from '../utils/data.js';

export class TrendsSection extends HTMLElement {
    connectedCallback() {
        const imagesHTML = trendsImages.map(img => 
            `<img src="${img.src}" class="tr-img ${img.class}">`
        ).join('');

        this.innerHTML = `
            <section class="section-trends">
                <div class="grid-container">
                    <h2 class="trends-title">ВДОХНОВИСЬ ТРЕНДАМИ</h2>
                    <p class="trends-text">собрали самые свежие тенденции в мире кастомизации. Узнай, что сейчас модно и как применить новые идеи, чтобы сделать свой стиль уникальным и современным</p>
                    <div class="trends-visual-grid">${imagesHTML}</div>
                </div>
            </section>
        `;
    }
}