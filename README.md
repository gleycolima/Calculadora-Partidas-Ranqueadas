# 🎮 Calculadora de Partidas Ranqueadas

## Descrição
Uma aplicação em JavaScript que calcula o nível de um jogador baseado em suas vitórias e derrotas em partidas ranqueadas. O sistema determina automaticamente o ranking do herói de acordo com seu saldo de vitórias.

## Objetivo
Criar uma função que receba como parâmetro a quantidade de vitórias e derrotas de um jogador e retorne seu nível (rank) baseado no saldo de vitórias calculado.

## Funcionalidades Implementadas

### ✅ Requisitos Técnicos
- **Variáveis**: Armazenam vitórias, derrotas, saldo e nível
- **Operadores**: Subtração para calcular saldo, comparadores para determinar nível
- **Laços de Repetição**: Loop `for` para simular evolução do jogador
- **Estruturas de Decisão**: `if/else if` para classificação de nível
- **Funções**: Função `nivelRanqueadas()` que processa os dados

## Tabela de Níveis

| Saldo de Vitórias | Nível |
|---|---|
| < 10 | Ferro |
| 11 - 20 | Bronze |
| 21 - 50 | Prata |
| 51 - 80 | Ouro |
| 81 - 90 | Diamante |
| 91 - 100 | Lendário |
| ≥ 101 | Imortal |

## Como Funciona

### Cálculo do Saldo
```
Saldo de Vitórias = Vitórias - Derrotas
```

### Classificação
O sistema classifica o jogador em 7 níveis diferentes baseado exclusivamente no saldo de vitórias.

## Formato de Saída
```
O Herói tem de saldo de {saldoVitorias} está no nível de {nivel}
```

### Exemplo
```
O Herói tem de saldo de 73 está no nível de Ouro
O Herói tem de saldo de 93 está no nível de Lendário
O Herói tem de saldo de 113 está no nível de Imortal
```

## Como Usar

### 1. Chamar a Função Diretamente
```javascript
const resultado = nivelRanqueadas(120, 47);
console.log(resultado.mensagem);
// Saída: O Herói tem de saldo de 73 está no nível de Ouro
```

### 2. Usar em um Loop
```javascript
for (let i = 0; i < 10; i++) {
    const resultado = nivelRanqueadas(vitorias, derrotas);
    console.log(resultado.mensagem);
}
```

## Estrutura do Código

```
┌─ Variáveis Globais
│  ├─ vitorias
│  └─ derrotas
│
├─ Função Principal: nivelRanqueadas()
│  ├─ Calcula saldo
│  ├─ Determina nível (if/else if)
│  └─ Retorna resultado
│
└─ Laço de Simulação (for)
   └─ Testa múltiplos cenários
```

## Exemplo de Execução

**Entrada:**
- Vitórias: 120
- Derrotas: 47

**Processamento:**
- Saldo = 120 - 47 = 73
- 73 está entre 51 e 80 → Ouro

**Saída:**
```
O Herói tem de saldo de 73 está no nível de Ouro
```

## Conceitos Aprendidos

- ✅ Declaração e uso de variáveis
- ✅ Operadores matemáticos e de comparação
- ✅ Estruturas condicionais (if/else if/else)
- ✅ Funções com parâmetros e retorno
- ✅ Laços de repetição (for)
- ✅ Organização lógica de código

## Autor
[Gleyco Lima](https://github.com/gleycolima)

## Licença
Aberto para fins educacionais
