$(document).ready(function(){
   
    $("#filtrado").change(function(e){
        validar(e);
    });


});
function validar(e){

    if($("#filtrado").val()==0){

       

        $(".pizzurno").show();
        $(".larre").show();
        $(".modelo").show();
        $(".santa").show();
       
        
    }
    
    if($("#filtrado").val()==1){

       

        $(".pizzurno").show();
        $(".larre").hide();
        $(".modelo").hide();
        $(".santa").hide();
        
        
    }

    if($("#filtrado").val()==2){

        

        $(".pizzurno").hide();
        $(".larre").show();
        $(".modelo").hide();
        $(".santa").hide();
        
       
    }

    if($("#filtrado").val()==3){

       

        $(".pizzurno").hide();
        $(".larre").hide();
        $(".modelo").show();
        $(".santa").hide();

        
    }

    if($("#filtrado").val()==4){

        
        
        $(".pizzurno").hide();
        $(".larre").hide();
        $(".modelo").hide();
        $(".santa").show();

       
        
    }
}


/*

if($("#filtrado").val()==""){

       

    $(".pizzurno").show();
    $(".larre").show();
    $(".modelo").show();
    $(".santa").show();
   
    
}

if($("#filtrado").val()=="buenos aires"){

   

    $(".pizzurno").show();
    $(".larre").hide();
    $(".modelo").hide();
    $(".santa").hide();
    
    
}

if($("#filtrado").val()=="mendoza"){

    

    $(".pizzurno").hide();
    $(".larre").show();
    $(".modelo").hide();
    $(".santa").hide();
    
   
}

if($("#filtrado").val()=="cordoba"){

   

    $(".pizzurno").hide();
    $(".larre").hide();
    $(".modelo").show();
    $(".santa").hide();

    
}

if($("#filtrado").val()=="misiones"){

    
    
    $(".pizzurno").hide();
    $(".larre").hide();
    $(".modelo").hide();
    $(".santa").show();

   
    
}

if($("#filtrado").val()!="" || "pizzurno" || "larre" || "modelo" || "santa"){
    
    $("#mensaje").empty();
    $("#mensaje").append("<p>No existe el establecimiento. Vuelva a intentarlo</p>");

    
    
}
}
*/