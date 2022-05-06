$("#mostraCaracter").click(contaNome)

function contaNome() {
    var dadoPessoa = $(".pessoa").each(function () {
        var tamanhoNome = $(this).find(".info-carac");
        var nomeQtd = $(this).find(".info-nome").text().length;
        var sobrenomeQtd = $(this).find(".info-sobrenome").text().length;

        var numTotal = nomeQtd + sobrenomeQtd;
        tamanhoNome.text("Nome: " + nomeQtd + " Sobrenome: "+ sobrenomeQtd + " Soma: " + numTotal)
    })
}
