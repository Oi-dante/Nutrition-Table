var tabela = document.querySelector('#tabela-pacientes');

tabela.addEventListener('dblclick', function(event) {

    // Somente executará nosso código caso o elemento em que clicamos seja um <td>
    // if (event.target.tagName == 'TD') {
    //     event.target.parentNode.remove()
    // }

    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() {
        event.target.parentNode.remove();
    }, 700);
 
    //Para descobrirmos qual filho foi clicado, utilizaremos o event como parâmetro na função
    //Ele irá nos dizer quem foi clicado, quem foi o alvo, pela propriedade target.

    //Para selecionarmos o pai de um elemento, trabalharemos com a propriedade parentNode.
    //paiDoAlvo.remove();
    //Enquanto o this se refere ao dono do evento, o event.target será quem sofreu propriamente o evento.
});


