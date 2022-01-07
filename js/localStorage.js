
let establecimiento, idioma, horario, precio;


    $(document).ready(function(){
        $(".inscribite-boton").click(function(){
            guardar();
        });

        $("#estableciminetos").change(function(){
            completar();
        });
        $("#provincias").change(function(){
            llenar();
        });
    });



function guardar(){
    establecimiento = $("#estableciminetos").val();

    idioma = $("#idiomas").val();
    horario = $("#horaDispo").val();
    precio = $("#precio").val();

    

    localStorage.setItem("establecimiento", establecimiento);
    localStorage.setItem("idioma", idioma);
    localStorage.setItem("horario", horario);
    localStorage.setItem("precio", precio);
}




function llenar(){
    provincia = $("#provincias").val();

    if(provincia == "Buenos Aires"){
     
        $("#epizzurno").show();
        $("#elarre").hide();
        $("#emodelo").hide();
        $("#esantarosadelima").hide();
    }

    if(provincia == "Cordoba"){

        $("#epizzurno").hide();
        $("#elarre").show();
        $("#emodelo").hide();
        $("#esantarosadelima").hide();
    }

    if(provincia == "Mendoza"){
     
        $("#epizzurno").hide();
        $("#elarre").hide();
        $("#emodelo").show();
        $("#esantarosadelima").hide();
    

    }

    if(provincia == "Misiones"){
     
        $("#epizzurno").hide();
        $("#elarre").hide();
        $("#emodelo").hide();
        $("#esantarosadelima").show();
    

    }
}


function completar(){
    establecimiento = $("#estableciminetos").val();

    $("#spanEmail").text(establecimiento.toLowerCase()+"@gmail.com");

    if(establecimiento == "Pizzurno"){
        $("#spanNombre").text(establecimiento);

        $("#spanDireccion").text("Olivieri 651");
        $("#spanLocalidad").text("Isidro Casanova");
        $("#spanProvincia").text("Buenos Aires");
        $("#iingles").show();
        $("#ifrances").hide();
        $("#ialeman").show();
        $("#iitaliano").hide();
        $("#hmañana").show();
        $("#htarde").hide();
        $("#hnoche").show();

    }
        
    
      if(establecimiento == "Larre"){
        $("#spanNombre").text(establecimiento);
      
        $("#spanDireccion").text("Marconi 231");
        $("#spanLocalidad").text("San Rafael");
        $("#spanProvincia").text("Mendoza");
        $("#iingles").hide();
        $("#ifrances").hide();
        $("#ialeman").show();
        $("#iitaliano").hide();
        $("#hmañana").hide();
        $("#htarde").hide();
        $("#hnoche").show();
    }

    if(establecimiento == "Modelo"){
        $("#spanNombre").text(establecimiento);
    
        $("#spanDireccion").text("Jofre 4441");
        $("#spanLocalidad").text("Nono");
        $("#spanProvincia").text("Cordoba"); 
        $("#iingles").hide();
        $("#ifrances").show();
        $("#ialeman").show();
        $("#iitaliano").hide();
        $("#hmañana").show();
        $("#htarde").hide();
        $("#hnoche").hide();
    }

    if(establecimiento== "SantaRosadeLima"){
        $("#spanNombre").text(establecimiento);
        
        $("#spanDireccion").text("Urdaneta 1234");
        $("#spanLocalidad").text("Obera");
        $("#spanProvincia").text("Misiones");

        $("#iingles").show();
        $("#ifrances").show();
        $("#ialeman").show();
        $("#iitaliano").show();
        $("#hmañana").show();
        $("#htarde").show();
        $("#hnoche").show();
    }

    if(establecimiento == 0){
        $("#spanNombre").empty();
        $("#spanEmail").empty();
        $("#spanDireccion").empty();
        $("#spanLocalidad").empty();
        $("#spanProvincia").empty();
        $("#iingles").hide();
        $("#ifrances").hide();
        $("#ialeman").hide();
        $("#iitaliano").hide();
        $("#hmañana").hide();
        $("#htarde").hide();
        $("#hnoche").hide();

    }
    
     

}

/*
localStorage.clearItem("direccion", "Olivieri 651");
localStorage.setItem("localidad", "Isidro Casanova");
localStorage.setItem("provincia", "Buenos Aires");
*/