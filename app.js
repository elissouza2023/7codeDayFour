alert('Bem-vindo ao Jogo do Número Secreto. Neste jogo, você deverá adivinhar qual número estou pensando. Vamos lá. Você terá duas tentativas. Boa sorte!!');
//Para Sortear um número entre 1 e 10
let numeroSecreto = Math.floor(Math.random() * 10) + 1; 
 // Para Exibir no console o número secreto
console.log('Número secreto é:', numeroSecreto);
//para definir o número de tentativas
let tentativas = 2;
//para contar o numero de tentativas em duas
for (let i = 0; i < tentativas; i++) {
    let chute = Number(prompt('Digite um número entre 1 e 10')); 

    if (chute === numeroSecreto) { 
        alert('Parabéns! Você acertou o número secreto.');
        break; // Para Sair do laço se tiver certo
    } else if (chute < numeroSecreto) {
        alert('O número secreto é maior');
    } else {
        alert('O número secreto é menor');
    }
//para Se for a última tentativa, exibe a mensagem de fim de jogo
    if (i === tentativas - 1) { 
        alert('Você Perdeu. Acabaram suas tentativas. O número secreto era: ' + numeroSecreto);
    }
}
