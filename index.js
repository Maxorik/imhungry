import data from './products.json' with { type: "json" };

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("/serviceworker.js").then();
    });
}


const container = document.getElementById('product-list');

data["products"].forEach(item => {
    const card = document.createElement('div');
    card.style.backgroundPosition = `${item.icon}`
    card.className = 'product-card';
    card.innerHTML = `<p style="padding-left: 8px">${item.name}</p>`;
    card.id = item.id;
    container.appendChild(card);
});

const cards = document.querySelectorAll('.product-card');

cards.forEach(card => {
    const storage = localStorage.getItem(`imhungry-${card.id}`);
    storage && storage === 'true' && card.classList.add('complete');
})

cards.forEach(card => card.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('complete');
    localStorage.setItem(`imhungry-${e.currentTarget.id}`, e.currentTarget.classList.contains('complete').toString())
}));