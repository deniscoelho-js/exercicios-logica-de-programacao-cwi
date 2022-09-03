let apresentacao;

let nomeCompleto = "João Paulo Da Silva";
let apelido = "J";
let idade = 21;
let dataNascimento = "02/01/2021";
let localNascimento = "São Paulo";
let altura = 1.81;
let trabalhando = "empregado";

apresentacao =
  "Meu nome é " +
  nomeCompleto +
  " (sou conhecido[a] como " +
  apelido +
  ") e tenho " +
  idade +
  " anos. Nasci no dia " +
  dataNascimento +
  ", na cidade de " +
  localNascimento +
  ". Tenho " +
  altura +
  "m de altura e atualmente estou " +
  (trabalhando ? "empregado" : "desempregado") +
  ".";

console.log(apresentacao);
