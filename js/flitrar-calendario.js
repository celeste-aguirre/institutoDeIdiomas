$(document).ready(function(){
    $("#filtrar").click(function(){
        filtrar();
    });
});


function filtrar(){
    const establecimiento=$("#establecimiento").val();
    const idioma=$("#idiomas").val();
 
        $("#mes article").hide();
        $(`#mes .${establecimiento}.${idioma}`).show();
        $("#mes2 article").hide();
        $(`#mes2 .${establecimiento}.${idioma}`).show();
}