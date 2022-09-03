// ----------------------------------------------------------------------------//
let mesmoNome;
let nomeDoFulano;
let nomeDoBeltrano;
mesmoNome = nomeDoFulano === nomeDoBeltrano;

// ----------------------------------------------------------------------------//
let maiorDeIdade;
let idade;
maiorDeIdade = idade >= 18;

// ----------------------------------------------------------------------------//
let valorComJuros;
let boleto;
valorComJuros = boleto * 1.1;

// ----------------------------------------------------------------------------//
let mediaAritmetica;
let item1;
let item2;
let item3;
let item4;
let item5;

mediaAritmetica = (item1 + item2 + item3 + item4 + item5) / 5;

// ----------------------------------------------------------------------------//
let lucroBruto;
let receitaLiquida;
let custoProdutos;
let margemBruta;

lucroBruto = receitaLiquida - custoProdutos;
margemBruta = (lucroBruto / receitaLiquida) * 100;

// ----------------------------------------------------------------------------//

const saldo = (saldoInicial) => {
  let saldo;
  saldo = ((saldoInicial - 99.9 + 2500.0 - 0.1) * 0.75) / 2;
  console.log(`O saldo final é: ${saldo.toFixed(2)}`);
};

saldo(1000.0);
