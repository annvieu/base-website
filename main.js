import { AppHeader } from './components/AppHeader.js';
import { HeroSection } from './components/HeroSection.js';
import { StyleSection } from './components/StyleSection.js';
import { TrendsSection } from './components/TrendsSection.js';
import { JoinSection } from './components/JoinSection.js';
import { StudioCard } from './components/StudioCard.js';
import { StudiosSection } from './components/StudiosSection.js';
import { MaterialsSection } from './components/MaterialsSection.js';
import { AppFooter } from './components/AppFooter.js';
import { ArticleCard } from './components/ArticleCard.js'
import { ArticlesSection } from './components/ArticlesSection.js'

import { articlesData } from '../utils/data.js';


const rootPath = new URL('.', import.meta.url).pathname;

/**
 * Функция для получения правильного пути к ассетам и страницам
 * @param {string} path - путь от корня проекта (например, 'images/logo.svg')
 */
export const getPath = (path) => {
    // Убираем лишние слеши в начале и склеиваем с корнем
    return (rootPath + path.replace(/^\//, '')).replace(/\/+/g, '/');
};

const components = {
    'app-header': AppHeader,
    'hero-section': HeroSection,
    'style-section': StyleSection,
    'trends-section': TrendsSection,
    'join-section': JoinSection,
    'studio-card': StudioCard,
    'studios-section': StudiosSection,
    'materials-section': MaterialsSection,
    'app-footer': AppFooter,
    'articles-section': ArticlesSection,
    'article-card': ArticleCard,
};

Object.entries(components).forEach(([tagName, componentClass]) => {
    if (!customElements.get(tagName)) {
        customElements.define(tagName, componentClass);
    }
});

if (document.getElementById('article-content')) {
    document.addEventListener('DOMContentLoaded', () => {
        // 1. Получаем ID из URL (например: site.com/article.html?id=1)
        const urlParams = new URLSearchParams(window.location.search);
        const articleId = parseInt(urlParams.get('id'));

        // 2. Ищем статью в базе данных
        const article = articlesData.articles.find(a => a.id === articleId);

        // Если статья не найдена — перекидываем обратно на список уроков
        if (!article) {
            window.location.href = 'lessons.html';
            return;
        }

        // 3. Заполняем текстовые данные
        document.getElementById('bc-title').textContent = article.title;
        document.getElementById('article-title').textContent = article.title;
        document.getElementById('article-time').textContent = `${article.time} мин`;
        document.getElementById('article-img').src = `../${article.img}`;
        
        // Тег сложности
        const levelEl = document.getElementById('article-level');
        levelEl.textContent = article.level === 'novice' ? 'для новичков' : 'для продвинутых';
        levelEl.className = `article-tag ${article.level === 'novice' ? 'tag-novice' : 'tag-pro'}`;

        // 4. Вставляем HTML контент (текст урока)
        document.getElementById('article-content').innerHTML = article.content;

        // 5. Генерируем карточки материалов
        const materialsContainer = document.getElementById('materials-container');
        materialsContainer.innerHTML = article.materials.map(mat => `
            <div class="material-card">
                <div class="material-icon-wrapper">
                    <img src="../${mat.icon}" alt="${mat.name}">
                </div>
                <span class="material-name">${mat.name}</span>
            </div>
        `).join('');
    });
}