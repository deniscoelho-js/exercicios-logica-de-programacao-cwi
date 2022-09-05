// ----------------------------------------------------------------------------//
const meses = ["Jan", "Fev", "Mar", "Abr", "Mai"];

const imprimeMeses = (mes, indice) => {
  console.log(`Mês: ${mes} - índice: ${indice}`);
};

// meses.forEach(imprimeMeses);

// ----------------------------------------------------------------------------//
// let valores = [1, 4, 6, 7, 8, 9, 11, 13, 14, 15, 17, 20, 25, 30];
let valores = [1, 2, 3, 5, 8, 13, 21, 23, 34, 55];
let mediaAritmetica;

const somaValores = (acc, numero) => {
  return (acc += numero);
};

mediaAri = valores.reduce(somaValores) / valores.length;

// console.log(mediaAri);

// ----------------------------------------------------------------------------//

const nomesComuns = [
  "Miguel",
  "Laura",
  "Lucas",
  "Beatriz",
  "Guilherme",
  "Maria",
  "Gabriel",
  "Ana",
  "Arthur",
  "Júlia",
  "Enzo",
  "Alice",
  "Rafael",
  "Mariana",
  "João",
  "Larissa",
  "Gustavo",
  "Maria Eduarda",
  "Pedro",
  "Sofia",
  "Bernardo",
  "Isabela",
  "Matheus",
  "Helena",
  "Davi",
  "Camila",
  "Heitor",
  "Lara",
  "Henrique",
  "Valentina",
  "Bruno",
  "Letícia",
  "Samuel",
  "Luana",
  "Felipe",
  "Amanda",
  "Lorenzo",
  "Yasmin",
  "Benjamin",
  "Sophia",
  "Vinícius",
  "Rebeca",
  "Rodrigo",
  "Juliana",
  "Eduardo",
  "Bruna",
  "Diego",
  "Cecília",
  "Antônio",
  "Fernanda",
  "Leonardo",
  "Isadora",
  "Noah",
  "Lorena",
  "Nícolas",
  "Lívia",
  "Daniel",
  "Manuela",
  "Thiago",
  "Vitória",
];

let confereNome;
confereNome = nomesComuns.includes("Jhon");

if (confereNome) {
  console.log("É, nome comum :P");
} else {
  console.log("Diferentão, hein? XD");
}
