// Adiciona um ouvinte de eventos para o evento de hover
document.getElementById('rgbButton').addEventListener('mouseover', function() {
    // Função para gerar valores de cor aleatórios
    function getRandomColor() {
        return `rgb(
            ${Math.floor(Math.random() * 256)},
            ${Math.floor(Math.random() * 256)},
            ${Math.floor(Math.random() * 256)}
        )`;
    }

    // Função para atualizar a cor da borda com um intervalo de 200 milissegundos
    function updateBorderColor() {
        document.getElementById('rgbButton').style.borderColor = getRandomColor();
    }

    // Atualiza a cor da borda inicialmente
    updateBorderColor();

    // Configura um intervalo para continuar atualizando a cor da borda enquanto o mouse estiver sobre o botão
    this.intervalId = setInterval(updateBorderColor, 200);
});

// Adiciona um ouvinte de eventos para o evento de saída do hover
document.getElementById('rgbButton').addEventListener('mouseout', function() {
    // Limpa o intervalo quando o mouse sai do botão
    clearInterval(this.intervalId);
    // Restaura a cor da borda para a cor padrão
    this.style.borderColor = '#5b5b5b';
});
