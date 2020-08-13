function calculaImc() {

    let pacientes = document.getElementsByClassName("paciente");

    for(let position = 0; position <= pacientes.length - 1; position++) {

        let paciente = pacientes[position];

        let nomeTd = paciente.getElementsByClassName("nomeTd")[0];
        let pesoTd = paciente.getElementsByClassName("pesoTd")[0];
        let alturaTd =paciente.getElementsByClassName("alturaTd")[0];

        let infoPaciente = {
            nome: nomeTd.textContent,
            peso: parseFloat(pesoTd.textContent),
            altura: parseFloat(alturaTd.textContent),
            pegaImc : function() {
                if((this.altura != 0) && (this.peso != 0)) {
                    let imc = this.peso / (this.altura * this.altura);
            
                    return imc;
                }
            }
        };

        let imc = infoPaciente.pegaImc();

        let imcTd =paciente.getElementsByClassName("imcTd")[0];
        imcTd.textContent = imc;
    }
}

var botao = document.getElementById("botao")
botao.addEventListener("click",  calculaImc);


