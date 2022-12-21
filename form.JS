
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

 //EXTRAI INFORMAÇOES DO PACIENTE DO FORM
    var paciente = obtemPacienteDoFormulario(form);
   
 //CRIA A TD E A TR DO PACIENTE
    var pacienteTr = montaTr(paciente);

 //VALIDAÇÃO DOS VALORES DO PACIENTE
    var erros = validaPaciente(paciente);
   
//MENSAGENS DE ERRO
    if (erros.length > 0){
        exibiMensagensDeErro(erros);
        return;
    }  

 //ADCIONA O PACIENTE NA TABELA
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();
    var mensagemErro = document.querySelector("#The-Fault");
    mensagemErro.innerHTML = "";
});


//FUNÇÕES
function exibiMensagensDeErro(erros){
    var ul = document.querySelector("#The-Fault");
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteDoFormulario(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value)
    } 

    return paciente;

}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");


    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    
    return td;
}

function validaPaciente(paciente){

    var erros = [];
    
    if(!validaPeso(paciente.peso)) {
        erros.push("Weight is invalid!");
    }

    if(!validaAltura(paciente.altura)) {
        erros.push("Height is invalid!");
    }

    if( paciente.nome.length == 0){
        erros.push("Name is invalid!"); 
    }

    if( paciente.gordura.length == 0){
        erros.push("Body Fat is invalid!");
    }

    if( paciente.peso.length == 0){
        erros.push("Weight is blank!");
    }

    if( paciente.altura.length == 0){
        erros.push("Height is blank!");
    }
    

    return erros;
}

