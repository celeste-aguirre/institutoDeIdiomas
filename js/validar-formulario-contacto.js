function validar(){
    var regexemail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/; 
    var regextelefono = /^[0-9]{4}-[0-9]{4}$/;
    var mensaje =""; 
    var error =0; 
    reset();

    if ($("#nombre").val()==""){ 
        mensaje+= "<p>El campo Nombre es obligatorio </p>";
        error++;
        $("#nombre").addClass('error');
    }
    if($("#apellido").val()==""){
        mensaje+= "<p>El campo Apellido es obligatorio </p>";
        error++;
        $("#apellido").addClass('error');
    }
    if(!$("#correo").val().match(regexemail)){
        mensaje+= "<p>Debe ser un Correo valido (ejemplo: xxxx@xxx.com)</p>";
        error++;
        $("#correo").addClass('error');
    }

    if (!$("#telefono").val().match(regextelefono)) {
        mensaje+="<p>Debe ser un telefono de ocho numeros (ejemplo: 4444-4444)</p>"
        error++;
        $("#telefono").addClass('error');
    }
    if (error>0){ 
        $("#mensaje").append(mensaje); 
            return false;
    }   
    else{
        
        return true;
    }
}

function reset(){ 
    $("#nombre").removeClass('error');
    $("#apellido").removeClass('error');
    $("#correo").removeClass('error');
    $("#telefono").removeClass('error');
    $("#mensaje").empty(); 
}
    
$(document).ready(function() {
    
    $("#form").submit(function() {
        if (validar()) {
            $(".modal").toggleClass("active");
        }
        return validar();
    });
    $("#nombre").keyup(function() {
        validar();
    });
    $("#apellido").keyup(function() {
        validar();
    });
    $("#correo").keyup(function() {
        validar("#correo");
    });

    $("#telefono").keyup(function(){
        validar("#telefono");
    })

    $("#consulta").keyup(function(){
        $("#contador").text($(this).val().length);
    });
});




