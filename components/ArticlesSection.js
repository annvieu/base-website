import { articlesData } from '../utils/data.js';

export class ArticlesSection extends HTMLElement {
    constructor() {
        super();
        this.activeFilters = []; // Храним текущие фильтры здесь
    }

    connectedCallback() {
        this.render();
    }

    // Публичный метод, который мы вызываем извне
    filterArticles(levels) {
        this.activeFilters = levels;
        this.render();
    }

    render() {
        const processedArticles = articlesData.articles.map(article => {
            const isRealArticle = article && article.title; // Проверяем, не пустой ли это объект изначально
            
            // Проверяем, подходит ли статья под фильтр
            const isVisible = this.activeFilters.length === 0 || 
                            (isRealArticle && this.activeFilters.includes(article.level));

            // Если это была статья, но она не прошла фильтр — превращаем её в "пустоту"
            // Если это изначально был пустой объект {} — оставляем "пустотой"
            if (!isRealArticle || !isVisible) {
                return {
                    title: '',
                    time: '',
                    img: '',
                    level: '',
                    layout: article?.layout || 'horizontal', // Сохраняем layout для корректных размеров ячейки
                    isEmpty: true
                };
            }

            return article;
        });

        const generateCard = (article) => `
            <article-card 
                id="${article.id || ''}"
                title="${article.title || ''}" 
                time="${article.time || ''}" 
                img="${article.img || ''}" 
                level="${article.level || ''}" 
                layout="${article.layout}">
            </article-card>
        `;

        this.innerHTML = `
            <div class="articles-grid">
                ${processedArticles.map(generateCard).join('')}
            </div>
        `;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const filters = document.querySelectorAll('.filter-item');
    const allBtn = document.querySelector('.lessons-filters li:first-child'); // Кнопка "все"
    const articlesSection = document.querySelector('articles-section');

    const updateFilters = () => {
        // Собираем массив активных уровней
        const activeLevels = Array.from(filters)
            .filter(item => item.classList.contains('active'))
            .map(item => item.classList.contains('novice') ? 'novice' : 'pro');

        // Если ничего не выбрано, подсвечиваем "все"
        if (activeLevels.length === 0) {
            allBtn.classList.add('active');
        } else {
            allBtn.classList.remove('active');
        }

        // Вызываем метод фильтрации у нашего компонента
        articlesSection.filterArticles(activeLevels);
    };

    filters.forEach(filter => {
        filter.addEventListener('click', () => {
            filter.classList.toggle('active');
            updateFilters();
        });
    });

    allBtn.addEventListener('click', () => {
        filters.forEach(f => f.classList.remove('active'));
        updateFilters();
    });
});