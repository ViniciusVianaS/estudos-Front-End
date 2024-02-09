document.addEventListener('DOMContentLoaded', function () {
    const ledButton = document.querySelector('.led-button');

    function getRandomColor() {
        return Math.floor(Math.random() * 256);
    }

    function updateColors() {
        const borderColor = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
        const boxShadowColor = `rgba(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()}, 0.2)`;

        ledButton.style.borderColor = borderColor;
        ledButton.style.boxShadow = `0 0 10px ${boxShadowColor}`;
    }

    // Adiciona um ouvinte de eventos para o evento de hover
    ledButton.addEventListener('mouseover', function () {
        // Atualiza as cores inicialmente
        updateColors();

        // Configura um intervalo para continuar atualizando as cores enquanto o mouse estiver sobre o botão
        this.intervalId = setInterval(updateColors, 200);
    });

    // Adiciona um ouvinte de eventos para o evento de saída do hover
    ledButton.addEventListener('mouseout', function () {
        // Limpa o intervalo quando o mouse sai do botão
        clearInterval(this.intervalId);
        // Restaura a cor da borda para a cor padrão
        this.style.borderColor = '#333';
        // Restaura a sombra para a cor padrão
        this.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';
    });
});
