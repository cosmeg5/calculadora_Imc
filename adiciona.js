var botao = document.querySelector("#cadastrar");

botao.addEventListener("click", cadastrar);
function cadastrar(event) {

    event.preventDefault();

    var camposNome = document.querySelector("#nome");
    var camposPeso= document.querySelector("#peso");
    var camposAltura = document.querySelector("#altura");


    var newPaciente = "<tr class='paciente'>"+
                  "<td class='nomeTd'>"+ camposNome.value  +"</td>"+
                  "<td class='pesoTd'>"+ camposPeso.value  +"</td>"+
                  "<td class='alturaTd'>"+ camposAltura.value  +"</td>"+
                  "<td class='imcTd'></td>"+
                  "</tr>"
    ;            

    var tabela = document.querySelector("#tabela");
    tabela.innerHTML = tabela.innerHTML + newPaciente;
    
    camposNome.value = "";
    camposPeso.value = "";
    camposAltura.value = "";

    return cadastrar;
};
