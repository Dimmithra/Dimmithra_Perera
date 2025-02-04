function createPortfolioCard(name, description, technology, image) {
    const card = document.createElement("div");
    card.classList.add("portfolio-card");

    card.innerHTML = `
        <img src="${image}" alt="${name}" class="portfolio-img">
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${description}</p>
            <p class="tech-stack"><strong>Technology:</strong> ${technology}</p>
        </div>
    `;

    return card;
}
