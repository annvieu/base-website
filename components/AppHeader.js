export class AppHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="header">
                <div class="grid-container">
                    <a href="#" class="nav-item-1"><img src="icons/logo.svg" alt="BASE LOGO"></a>
                    <a href="#" class="nav-item-2">уроки</a>
                    <a href="#" class="nav-item-3">тренды</a>
                    <a href="#" class="nav-item-4">студии</a>
                    <a href="#" class="nav-item-5">бот</a>
                </div>
            </header>
        `;
    }
}