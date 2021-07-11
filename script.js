// Carne - 400gr por Pessoa ou +6h - 650gr por Pessoa
// Cerveja - 1200ml por Pessoa ou +6h - 2000ml por Pessoa (menos crianças)
// Bebida (Refrigerante/Agua) - 1000ml por Pessoa ou +6h - 1500ml por Pessoa
// Crianças valem por 0,5 Pessoa


let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
   
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebida = bebidaPP(duracao) * adultos + (bebidaPP(duracao) / 2 * criancas);

    resultado.innerHTML = `<p><img src="./Images/Carne.png"></img> ${Math.round(qtdTotalCarne/1000 )} Kg de Carne</p>`
    resultado.innerHTML += `<p><img src="./Images/Cerveja.png"></img>${Math.round(qtdTotalCerveja/355 )} Latas de Cerveja</p>`
    resultado.innerHTML += `<p><img src="./Images/Garrafas.png"></img>${Math.round(qtdTotalBebida/2000 )} Garrafas de Bebidas</p>`
}
function zerar(){
    inputAdultos.value = "";
    inputCriancas.value = "";
    inputDuracao.value = "";
    resultado.innerHTML = "";
}

function carnePP(duracao){
    if (duracao >= 6){
        return 650;
    }
    else {
        return 400;
    }
}
function cervejaPP(duracao){
    if (duracao >= 6){
        return 2000;
    }
    else {
        return 1200;
    }
}
function bebidaPP(duracao){
    if (duracao >= 6){
        return 1500;
    }
    else {
        return 1000;
    }
}