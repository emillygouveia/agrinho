document.addEventListener('DOMContentLoaded', () => {
    const campoImage = document.querySelector('.image-campo');
    const cidadeImage = document.querySelector('.image-cidade');

    // Exemplo de troca de imagens
    campoImage.addEventListener('click', () => {
        alert('Você clicou na imagem do campo!');
    });

    cidadeImage.addEventListener('click', () => {
        alert('Você clicou na imagem da cidade!');
    });
});