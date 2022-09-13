// ----------------------------------------------------------------------------//
const imprimir = (argumento) => {
  console.log(`Você mandou imprimir: ${argumento}`)
}

// imprimir("Reset");

// ----------------------------------------------------------------------------//
const mesmoNome = (nome1, nome2) => {
  if (nome1 === nome2) {
    console.log("Os nomes são iguais.")
  } else {
    console.log("Os nomes não são iguais.")
  }
}

// mesmoNome("Fulano", "Beltrano");

// ----------------------------------------------------------------------------//
const maiorDeIdade = (idade) => {
  if (idade >= 18) {
    console.log("A idade é de um adulto")
  } else {
    console.log("A idade não é de um adulto")
  }
}

// maiorDeIdade(18);

// ----------------------------------------------------------------------------//
const valorComJuros = (boleto) => {
  let valorAtualizado = boleto * 1.1
  console.log(
    `O valor do boleto com juros ficou: R$ ${valorAtualizado.toFixed(2)}`
  )
}

// valorComJuros(100)

// ----------------------------------------------------------------------------//
// 4 média aritmética

const mediaAritmetica = (...numeros) => {
  let media = 0
  let somaDosNumeros = numeros.reduce((indice, acc) => {
    return acc + indice
  })

  media = somaDosNumeros / numeros.length

  console.log(`A média aritmética dos números é: ${somaDosNumeros}`)
}

// mediaAritmetica(1, 3, 6, 20)

// ----------------------------------------------------------------------------//
// 5

const lucroBruto = (receitaLiquida, custoProdutos) => {
  return receitaLiquida - custoProdutos
}

const margemBruta = (lucroBruto, receitaLiquida) => {
  console.log(
    `A margem bruta é: ${(lucroBruto / receitaLiquida).toFixed(2) * 100}%`
  )
}

console.log(`O lucro bruto é: ${lucroBruto(1021, 503)}`)

// margemBruta(lucroBruto(1021, 503), 1000)

// ----------------------------------------------------------------------------//
// 6

const saldo = (saldoInicial) => {
  let saldo
  saldo = ((saldoInicial - 99.9 + 2500.0 - 0.1) * 0.75) / 2
  console.log(`O saldo final é: ${saldo.toFixed(2)}`)
}

saldo(1000.0)
