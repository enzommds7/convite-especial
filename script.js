// Capturamos os dois botões do HTML através dos seus IDs
const btnSim = document.getElementById('btn-sim');
const btnNao = document.getElementById('btn-nao');

// EVENTO DO BOTÃO SIM
// Quando clicar no "Sim", mostra uma mensagem na tela
btnSim.addEventListener('click', () => {
    alert('Combinado! ❤️');
});

// EVENTO DO BOTÃO NÃO
// 'mouseover' detecta quando a setinha do mouse entra na área do botão
btnNao.addEventListener('mouseover', () => {

    // Mudamos a posição para 'absolute' para ele se soltar do layout e flutuar
    btnNao.style.position = 'absolute';

    // Pegamos a largura e a altura total da janela do navegador
    const larguraJanela = window.innerWidth;
    const alturaJanela = window.innerHeight;

    // O Math.random() gera um número aleatório. 
    // Subtraímos a largura/altura do próprio botão para que ele não fuja para fora da tela invisível
    const novoX = Math.random() * (larguraJanela - btnNao.offsetWidth);
    const novoY = Math.random() * (alturaJanela - btnNao.offsetHeight);

    // Aplicamos as novas coordenadas aleatórias no CSS do botão
    btnNao.style.left = `${novoX}px`;
    btnNao.style.top = `${novoY}px`;
});