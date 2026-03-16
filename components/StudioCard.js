import { getPath } from '../main.js';
import { fullStudios } from '../utils/data.js';

export class StudioCard extends HTMLElement {
    connectedCallback() {
        const title = this.getAttribute('title');
        const desc = this.getAttribute('desc');
        const img = this.getAttribute('img');
        const link = this.getAttribute('link');
        const isDark = this.hasAttribute('dark');

        this.innerHTML = `
            <div class="studio-item">
                <div class="studio-img-wrapper">
                    <img src="${getPath(img)}" class="studio-img ${isDark ? 'dark' : ''}">
                </div>
                <div class="studio-content">
                    <div>
                        <h3>${title}</h3>
                        <p>${desc}</p>
                    </div>
                    <a href="${link}" class="arrow-icon external-link" target="_blank">
                        <img src="${getPath('icons/arrow-icon.svg')}" alt="arrow-icon">
                    </a>
                </div>
            </div>
        `;

        this.querySelector('.studio-item').addEventListener('click', (e) => {
            if (e.target.closest('.external-link')) return; 
            
            // Ищем полные данные в fullStudios
            const fullData = fullStudios.find(s => s.title === title) || {};
            
            openStudioModal({
                title, 
                img, 
                isDark, 
                link: fullData.link || link,
                city: fullData.city || 'санкт-петербург',
                email: fullData.email, // Могут быть undefined
                phone: fullData.phone, // Добавляем новое поле
                website: fullData.website || 'ogcustom.ru',
                portfolio: fullData.portfolio || []
            });
        });
    }
}

function openStudioModal(data) {
    const overlay = document.createElement('div');
    overlay.className = 'studio-modal-overlay';

    // Формируем HTML для контактов только если данные есть
    const emailHTML = data.email ? `<p><a href="mailto:${data.email}">${data.email}</a></p>` : '';
    const phoneHTML = data.phone ? `<p><a href="tel:${data.phone.replace(/\s+/g, '')}">${data.phone}</a></p>` : '';

    // Та же шахматная логика для 6 слотов
    const portfolioSlots = [
        data.portfolio[0], null, null, 
        data.portfolio[1], data.portfolio[2], data.portfolio[3]
    ];

    const portfolioHTML = portfolioSlots.map(src => {
        if (src) return `<div class="portfolio-cell"><img src="${getPath(src)}" alt="work"></div>`;
        return `<div class="portfolio-cell empty-slot"></div>`;
    }).join('');

    overlay.innerHTML = `
        <div class="studio-modal-content">
            <button class="modal-close-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2">
                    <path d="M18 6L6 18M6 6L18 18" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            
            <div class="modal-left">
                <div class="modal-logo-wrapper ${data.isDark ? 'dark' : ''}">
                    <img src="${getPath(data.img)}" alt="${data.title}">
                </div>
                <h2>${data.title}</h2>
                
                <div class="modal-info-footer">
                    <div class="modal-contacts">
                        <p>${data.city}</p>
                        ${phoneHTML}
                        ${emailHTML}
                        <p><a href="https://${data.website}" target="_blank">${data.website}</a></p>
                    </div>
                    <a href="${data.link}" class="modal-external-link" target="_blank">
                        <img src="${getPath('icons/arrow-icon.svg')}" alt="arrow">
                    </a>
                </div>
            </div>

            <div class="modal-right">
                <h2>ПРИМЕРЫ РАБОТ</h2>
                <div class="portfolio-grid">
                    ${portfolioHTML}
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';

    const closeModal = () => {
        overlay.remove();
        document.body.style.overflow = '';
    };

    overlay.querySelector('.modal-close-btn').onclick = closeModal;
    overlay.onclick = (e) => { if (e.target === overlay) closeModal(); };
}