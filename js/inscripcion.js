
let regexTelefono = /^[0-9]{4}-[0-9]{4}$/;
let regexEmail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;


let regexCelular = /^15-[0-9]{4}-[0-9]{4}$/; /*  POR SI QUEREMOS AGREGAR CELULAR MIRAR DESPUES   */
let regexCelular2 = /^15-[0-9]{4}-[0-9]{4}$/; /*  POR SI QUEREMOS AGREGAR CELULAR MIRAR DESPUES   */

$(document).ready(function(){
    $("#formulario").submit(function(e){
        validar(e);
    });
  
    $("#nombre, #apellido, #telefono, #mail, #provincias, #ciudad").keyup(function(e){
        validar(e);
    });
    
    $("#provincias").change(function(e){
        validar(e);
    });


    let idioma = window.localStorage.getItem("idioma");

    $("#sidioma").text(idioma);

    let establecimiento = window.localStorage.getItem("establecimiento");

    $("#sestablecimiento").text(establecimiento);

        $("#establecimiento1").hide();
        $("#establecimiento2").hide();
        $("#establecimiento3").hide();
        $("#establecimiento4").hide();

    if(establecimiento == "Pizzurno"){
        $("#establecimiento1").show();
        $("#establecimiento2").hide();
        $("#establecimiento3").hide();
        $("#establecimiento4").hide();
    }

    if(establecimiento == "Larre"){
        $("#establecimiento1").hide();
        $("#establecimiento2").show();
        $("#establecimiento3").hide();
        $("#establecimiento4").hide();
    }
    if(establecimiento == "Modelo"){
        $("#establecimiento1").hide();
        $("#establecimiento2").hide();
        $("#establecimiento3").show();
        $("#establecimiento4").hide();
    }
    if(establecimiento == "SantaRosadeLima"){
        $("#establecimiento1").hide();
        $("#establecimiento2").hide();
        $("#establecimiento3").hide();
        $("#establecimiento4").show();
    }


    let precio = window.localStorage.getItem("precio");

    $("#sprecio").text(precio);

    let horario = window.localStorage.getItem("horario");

    $("#shorario").text(horario);




});



function validar(e){
    let error=false;
    $("#mensaje").empty();
    $("#formulario, #nombre, #apellido, #telefono, #mail, #provincias, #ciudad").removeClass();
    
    if($("#nombre").val()==""){
        error=true;
        $("#mensaje").append("<h4>El campo nombre es obligatorio</h4>");
        $("#nombre").addClass("alerta");
    }
    if($("#apellido").val()==""){
        error=true;
        $("#mensaje").append("<h4>El campo apellido es obligatorio</h4>");
        $("#apellido").addClass("alerta");
    }
    
    if(!$("#telefono").val().match(regexTelefono) ){
        error=true;
        $("#mensaje").append("<h4>Telefono no valido</h4>");
        $("#telefono").addClass("alerta");
    }

    if($("#telefono").val()==""){
        error=true;
        $("#mensaje").append("<h4>El campo telefono es obligatorio</h4>");
        $("#telefono").addClass("alerta");
    }

    if(!$("#mail").val().match(regexEmail)){
        error=true;
        $("#mensaje").append("<h4>E-mail no valido</h4>");
        $("#mail").addClass("alerta");
    }

    if($("#mail").val()==""){
        error=true;
        $("#mensaje").append("<h4>El campo E-mail es obligatorio</h4>");
        $("#mail").addClass("alerta");
    }

    if($("#provincias").val()=="0"){
        error=true;
        $("#mensaje").append("<h4>Es obligatorio que elija alguna provincia de la lista</h4>");
        $("#provincias").addClass("alerta");
    }
    if($("#ciudad").val()==""){
        error=true;
        $("#mensaje").append("<h4>El campo ciudad es obligatorio</h4>");
        $("#ciudad").addClass("alerta");
    }
    if (error){
        e.preventDefault();
    }
}