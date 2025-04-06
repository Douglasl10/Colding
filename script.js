// Seleciona todos os cards
const cards = document.querySelectorAll('.img1');

cards.forEach(card => {
    const text = card.querySelector('.text');

    // Evento mouseover para mostrar o texto
    card.addEventListener('mouseover', () => {
        text.style.display = 'block';
    });

    // Evento mouseout para ocultar o texto
    card.addEventListener('mouseout', () => {
        text.style.display = 'none';
    });
});
