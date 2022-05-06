$(".botao-remover").click(function(event){
    event.preventDefault();
    var linha = $(this).parent().parent()
    linha.fadeOut(1000);
    setTimeout(function () {
        linha.remove();
    }, 1000)
})