import { getPath } from '../main.js';

export class ArticleCard extends HTMLElement {
    connectedCallback() {
        let title = this.getAttribute('title') || '';
        let time = this.getAttribute('time') || '';
        let img = this.getAttribute('img') || '';
        let level = this.getAttribute('level') || '';
        let layout = this.getAttribute('layout') || 'horizontal';

        if (!title && !img) {
            this.innerHTML = `<div class="article-card ${layout} empty"></div>`;
            return;
        }

        const levelText = level === 'novice' ? 'для новичков' : 'для продвинутых';
        const levelClass = level === 'novice' ? 'tag-novice' : 'tag-pro';

        if (layout === 'vertical') {
            // БОЛЬШАЯ КАРТОЧКА — картинка → время → заголовок + сложность
            this.innerHTML = `
                <div class="article-card vertical">
                    <div class="article-img-wrapper">
                        <img src="${getPath(img)}" alt="${title}">
                    </div>
                    <div class="article-footer">
                        <img src="${getPath('icons/book-icon.svg')}" alt="time" class="book-icon">
                        <span class="time-text">${time} мин</span>
                    </div>
                    <div class="article-header">
                        <h3>${title}</h3>
                        <span class="article-tag ${levelClass}">${levelText}</span>
                    </div>
                </div>
            `;
        } else {
            // МАЛАЯ КАРТОЧКА — время сверху, заголовок точно внизу картинки
            this.innerHTML = `
                <div class="article-card horizontal">
                    <div class="article-img-wrapper">
                        <img src="${getPath(img)}" alt="${title}">
                    </div>
                    <div class="article-info">
                        <div class="article-footer">
                            <img src="${getPath('icons/book-icon.svg')}" alt="time" class="book-icon">
                            <span class="time-text">${time} мин</span>
                        </div>
                        <div class="article-text-bottom">
                            <h3>${title}</h3>
                            <span class="article-tag ${levelClass}">${levelText}</span>
                        </div>
                    </div>
                </div>
            `;
        }
    }
}