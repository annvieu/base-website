export class AppFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="footer">
                <div class="grid-container">
                    <a href="https://t.me/nobases" class="f-1"><img src="/icons/tg-icon.svg" width="47"></a>
                    <a href="https://t.me/nobases" class="f-2">связаться</a>
                    <a href="#" class="f-3">о проекте</a>
                    <a href="#" class="f-8">правовая информация</a>
                    <p class="f-10">© no base 2026</p>
                </div>
            </footer>
        `;
    }
}