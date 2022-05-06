function openModal(){
    $("#modal").addClass('ativo')
}
function fechaModal(){
    $("#modal").removeClass('ativo')
}

$("#cadastrarCliente").click(openModal);
$("#modalClose").click(fechaModal,)
$("#modalFecha").click(fechaModal,)