// ===== VARIÁVEIS =====
let vitorias = 120;
let derrotas = 47;

// ===== FUNÇÃO PRINCIPAL =====
function nivelRanqueadas(vitorias, derrotas) {
    // Cálculo do saldo de vitórias
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    // ===== ESTRUTURA DE DECISÃO - Determina o nível =====
    if (saldoVitorias < 10) {
        nivel = "Ferro";
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário";
    } else if (saldoVitorias >= 101) {
        nivel = "Imortal";
    }

    // ===== RETORNO FORMATADO =====
    return {
        saldoVitorias: saldoVitorias,
        nivel: nivel,
        mensagem: `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`
    };
}

// ===== EXECUÇÃO INICIAL =====
console.log("=== ESTADO INICIAL ===");
const resultadoInicial = nivelRanqueadas(vitorias, derrotas);
console.log(resultadoInicial.mensagem);

// ===== LAÇO DE REPETIÇÃO - Simulação de evolução =====
console.log("\n=== EVOLUÇÃO DO HERÓI ===\n");
for (let partidasJogadas = 0; partidasJogadas <= 120; partidasJogadas += 20) {
    vitorias += 20;
    derrotas += 10;
    
    const resultado = nivelRanqueadas(vitorias, derrotas);
    console.log(`Partidas: ${partidasJogadas + 20} | ${resultado.mensagem}`);
}
