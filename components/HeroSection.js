export class HeroSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section class="hero">
                <div class="grid-container" style="width: 100%;">
                    <div class="hero-content">
                        <p>наша платформа – это пространство для тех, кто хочет создавать уникальные вещи своими руками</p>
                        <a href="#" class="btn btn-desktop">каталог уроков</a>
                        <a href="#" class="btn btn-mobile">к урокам</a>
                    </div>
                </div>
            </section>
        `;
    }
}