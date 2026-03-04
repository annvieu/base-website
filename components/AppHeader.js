export class AppHeader extends HTMLElement {
    connectedCallback() {
        const isDarkTheme = this.getAttribute('theme') === 'dark';
        
        const logoSrc = isDarkTheme ? '/icons/logo-dark.svg' : '/icons/logo.svg';
        
        const headerClass = isDarkTheme ? 'header dark-text' : 'header';

        this.innerHTML = `
            <header class="${headerClass}">
                <div class="grid-container">
                    <a href="/" class="nav-item-1">
                        <img src="${logoSrc}" alt="BASE LOGO">
                    </a>
                    <a href="#" class="nav-item-2">уроки</a>
                    <a href="#" class="nav-item-3">тренды</a>
                    <a href="/pages/studios.html" class="nav-item-4">студии</a>
                    <a href="#" class="nav-item-5">бот</a>
                </div>
            </header>
        `;
    }
}