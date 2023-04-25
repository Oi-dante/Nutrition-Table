var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);//true or false
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido){
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

  if (pesoEhValido && alturaEhValida) {
        var imc = calculaIMC(peso,altura);
        tdImc.textContent = imc;
        
    }
    //FOR COM A UTILIDADE, CASO O PACIENTE COM UM PESO OU ALTURA INVALIDO SEJA COLOCADO 
    //NA TABELA ELA IRÁ MOSTRAR O ERRO
}

// FUNÇÕES DE VALIDAÇÃO DO PESO E ALTURA
function validaPeso(peso){

    if (peso >= 0 && peso <= 600) {
        return true;
    } else {
        return false;
    }
}
function validaAltura(altura) {

    if (altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}


// FORMULA DO CALCULO
function calculaIMC(peso, altura){
    var imc = 0;
    
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}