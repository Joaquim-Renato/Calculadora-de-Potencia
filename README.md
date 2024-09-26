# Calculadora de Potência

Este é um projeto simples que permite calcular a potência consumida por um aparelho elétrico com base na tensão (em Volts) e na corrente (em Amperes) informadas pelo usuário. O cálculo é feito utilizando a fórmula da potência: 

onde:
- \( P \) é a potência (em Watts)
- \( V \) é a tensão (em Volts)
- \( A \) é a corrente (em Amperes)

## Funcionalidades

- Entrada de dados para tensão e corrente.
- Cálculo da potência consumida.
- Exibição dos resultados diretamente na página.

## Tecnologias Utilizadas

- HTML
- JavaScript (DOM)

# innerText em JavaScript

O comando `innerText` em JavaScript é utilizado para **obter** ou **alterar** o conteúdo de texto visível de um elemento HTML. Ele manipula apenas o texto exibido para o usuário, ignorando espaços e quebras de linha extras, e não inclui conteúdo HTML ou tags.

O innerText é útil quando você precisa lidar apenas com o conteúdo textual de um elemento, sem se preocupar com a estrutura HTML interna.
## Diferença entre `innerText` e `innerHTML`

- **`innerText`**: Retorna ou define apenas o texto visível.
- **`innerHTML`**: Retorna ou define o HTML interno, incluindo tags e estrutura de marcação.

## Exemplo de uso

### 1. Obter o texto de um elemento

```javascript
let texto = document.getElementById('meuElemento').innerText;
console.log(texto);
```

### 2. Alterar o texto de um elemento
```javascript
document.getElementById('meuElemento').innerText = 'Novo Texto';
```