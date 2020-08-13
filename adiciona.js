var botao = document.querySelector("#cadastrar");

botao.addEventListener("click", cadastrar);
function cadastrar(event) {

    event.preventDefault();

    var newPaciente = "<tr class='paciente'>"+
                  "<td class='nomeTd'>Esther</td>"+
                  "<td class='pesoTd'>3,800</td>"+
                  "<td class='alturaTd'>0,52</td>"+
                  "<td class='imcTd'></td>"+
                  "</tr>"
    ;            

    var tabela = document.querySelector("#tabela");
    tabela.innerHTML = tabela.innerHTML + newPaciente;

    return cadastrar;
};
