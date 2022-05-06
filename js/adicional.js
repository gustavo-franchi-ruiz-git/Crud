var botaoAdiciona = $("#cadastraPessoa");

botaoAdiciona.click(insereLinha)

function insereLinha(){
    var corpoTabela = $(".records").find("tbody");

    var nome = $("#campoNome").val()
    var sobrenome = $("#campoSobrenome").val()
    var email = $("#campoEmail").val()

    var erros = validaPessoa();
    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }else{
        formClear();
    }
    var linha = novoDado(nome, sobrenome, email)    

    linha.find(".botao-remover").click(removeLinha)
    linha.find(".info-nome").dblclick(editarTd)
    linha.find(".info-sobrenome").dblclick(editarTd)
    linha.find(".info-email").dblclick(editarTd)

    corpoTabela.prepend(linha)
}

function novoDado(nome, sobrenome, email){
    var linha = $("<tr>").addClass("pessoa")
    var colunaNome = $("<td>").text(nome).addClass("info-nome");
    var colunaSobrenome = $("<td>").text(sobrenome).addClass("info-sobrenome");
    var colunaEmail = $("<td>").text(email).addClass("info-email");
    
    var colunaCaracter = $("<td>").addClass("info-caracter")
    var spanCaracter = $("<span>").addClass("info-carac")
    
    var colunaRemover = $("<td>");
    var link = $("<a>").addClass("botao-remover").attr("href", "#")
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete")

    link.append(icone);
    colunaRemover.append(link);

    colunaCaracter.append(spanCaracter)

    linha.append(colunaNome)
    linha.append(colunaSobrenome)
    linha.append(colunaEmail) 
    linha.append(colunaCaracter)
    linha.append(colunaRemover)

    return linha;
}

function removeLinha(){
    event.preventDefault();
    $(this).parent().parent().remove();
}


function validaPessoa(){

    var erros = [];

    if($("#campoNome").val() == 0) erros.push("O nome não pode ser em branco.")
    if($("#campoSobrenome").val() == 0) erros.push("O sobrenome não pode ser em branco")
    if($("#campoEmail").val() == 0) erros.push("O email não pode ser em branco")
    if(!validateEmail($("#campoEmail").val())) erros.push("O email está incorreto.")

    return erros;
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }


  function exibeMensagensDeErro(erros){
    var ul = $("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro
        ul.append(li);    
    });

}

function formClear(){
    $("#campoNome").val("")
    $("#campoSobrenome").val("")
    $("#campoEmail").val("")
    $("#mensagens-erro").text("")
}
