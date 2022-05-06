var campoFiltro = $("#filtrar-tabela");
    
campoFiltro.on("input", function(){
    var pacientes = $(".pessoa");

    if(this.value.length > 0){
        for(var i = 0; i < pacientes.length; i ++){
            var paciente = pacientes[i];

            var tdNome = paciente.querySelector(".info-nome");
            var tdSobrenome = paciente.querySelector(".info-sobrenome");
            var tdEmail = paciente.querySelector(".info-email");



            var nome = tdNome.textContent;
            var sobrenome = tdSobrenome.textContent;
            var email = tdEmail.textContent;
            
            var expressao = new RegExp(this.value,"i");


            if(!expressao.test(nome) && !expressao.test(sobrenome) && !expressao.test(email)){
                paciente.classList.add("invisivel")
            }else{
                paciente.classList.remove("invisivel");
            }
        }
    }else{

        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel")
        }
    }

})




