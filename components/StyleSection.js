export class StyleSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section class="section-style">
                <div class="grid-container">
                    <img src="images/create_style.jpg" class="style-img" alt="Create Style">
                    <h2 class="style-title">СОЗДАВАЙ СВОЙ СТИЛЬ</h2>
                    <div class="style-desc">
                        <p>хочешь сделать свою одежду уникальной? на  платформе собраны простые и понятные уроки по кастому – от простых техник до профессиональных приемов. учись и выделяйся вместе с нами</p>
                        <a href="#" class="btn">к урокам</a>
                    </div>
                </div>
            </section>
        `;
    }
}