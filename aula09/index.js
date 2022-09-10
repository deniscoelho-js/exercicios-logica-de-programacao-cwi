// ----------------------------------------------------------------------------//
const imprimir = (argumento) => {
  console.log(`Você mandou imprimir: ${argumento}`);
};

// imprimir("Reset");

// ----------------------------------------------------------------------------//
const mesmoNome = (nome1, nome2) => {
  if (nome1 === nome2) {
    console.log("Os nomes são iguais.");
  } else {
    console.log("Os nomes não são iguais.");
  }
};

// mesmoNome("Fulano", "Beltrano");

// ----------------------------------------------------------------------------//
const maiorDeIdade = (idade) => {
  if (idade >= 18) {
    console.log("A idade é de um adulto");
  } else {
    console.log("A idade não é de um adulto");
  }
};

// maiorDeIdade(18);

// ----------------------------------------------------------------------------//
const valorComJuros = (boleto) => {
  let valorAtualizado = boleto * 1.1;
  console.log(
    `O valor do boleto com juros ficou: R$ ${valorAtualizado.toFixed(2)}`
  );
};

valorComJuros(100);

// ----------------------------------------------------------------------------//
// faltam os exercicios 4 e 5
