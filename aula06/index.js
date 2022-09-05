const imc = (altura, peso) => {
  return (peso / Math.pow(altura, 2)).toFixed(2);
};

const classificacao = (imc) => {
  if (imc < 18.5) {
    console.log(`Seu imc é: ${imc}, sua classificação é: magro`);
  } else if (imc < 25) {
    console.log(`Seu imc é: ${imc}, sua classificação é: normal`);
  } else if (imc < 30) {
    console.log(`Seu imc é: ${imc}, sua classificação é: com sobrepeso`);
    console.log("Obesidade grau 1");
  } else if (imc < 40) {
    console.log(`Seu imc é: ${imc}, sua classificação é: obeso`);
    console.log("Obesidade grau 2");
    console.log("Cuidado! Você está acima do peso recomendado pela OMS");
  } else {
    console.log(`Seu imc é: ${imc}, sua classificação é: obeso com gravidade`);
    console.log("Obesidade grau 3");
    console.log("É importante procurar um médico para avaliar sua saúde");
  }
};

classificacao(imc(1.65, 85.2));
