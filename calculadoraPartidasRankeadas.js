//estrutura pra receber dados do usuário
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

//utilização de promise, para criar a iteração para analisar multiplos jogadores
function question(query) {
    return new Promise(resolve => {
        readline.question(query, resolve);
    });
}

async function main() {
    //criação de váriaveis - Usuário pode digitar quantos jogadores quer analisar, depois a quantidade de vitorias e derrotas de cada um
    const quantJogadores = parseInt(await question('Digite a quantidade de jogadores que quer analisar o ranque:'), 10);

    for (let jogador = 0; jogador < quantJogadores; jogador++) {
        const quantVitorias = parseInt(await question('Digite a quantidade de vitórias:'), 10);
        const quantDerrotas = parseInt(await question('Digite a quantidade de derrotas:'), 10);
        let nivel;
        let saldoRankeadas;

        //Calculo do saldo de vitórias
        saldoRankeadas = quantVitorias - quantDerrotas;

        //verificação dos valores nível do jogador
        if (quantVitorias <= 10) {
            nivel = 'Ferro';
        } else if (quantVitorias >= 11 && quantVitorias <= 20) {
            nivel = 'Bronze';
        } else if (quantVitorias >= 21 && quantVitorias <= 50) {
            nivel = 'Prata';
        } else if (quantVitorias >= 51 && quantVitorias <= 80) {
            nivel = 'Ouro';
        } else if (quantVitorias >= 81 && quantVitorias <= 90) {
            nivel = 'Diamante';
        } else if (quantVitorias >= 91 && quantVitorias <= 100) {
            nivel = 'Lendário';
        } else {
            nivel = 'Imortal';
        }

        //imprime a mensagem desejada, com o nome e nivel do Herói
        console.log(`O Herói tem de saldo de ${saldoRankeadas} está no nível de ${nivel}`);
                
        // outro tipo de impressão que também retorna a mensagem desejada
        // console.log("O Herói tem de saldo de " + saldoRankeadas + " está no nível de " + nivel});
    }

    readline.close();
}

main();
