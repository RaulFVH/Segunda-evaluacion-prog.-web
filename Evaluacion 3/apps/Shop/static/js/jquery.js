$.validator.addMethod("password", function(value) {
    
  });

$(function(){
    $("#miFormulario").validate({
        rules:{
            txtCorreo:{
                required:true,
                email:true
            },
            txtContraseña:{
                required:true,
                minlength:6,
                password:false
            }
        },
        messages:{
            txtCorreo:{
                required: "El correo es un campo obligatorio.",
                minlength: "El formato del correo no es valido.",
                email: "Ingresa una dirección de correo electrónico válida."
            },
            txtContraseña:{
                required: "La contraseña es un campo obligatorio.",
                minlength: "La contraseña debe tener minimo 6 caracteres.",
                password: "La contraseña es invalida."
            }
        }
    })
})

$(function(){
    $("#fondo1").css({"background-color": "rgba(7, 201, 255, 0.458)"});
    $("#fondo2").css({"background-color": "rgba(7, 201, 255, 0.458)"});
    $("#fondo3").css({"background-color": "rgba(7, 201, 255, 0.458)"});
    $("#fondo4").css({"background-color": "rgba(7, 201, 255, 0.458)"});
    $("#fondo5").css({"background-color": "rgba(7, 201, 255, 0.458)"});
    $("#fondo6").css({"background-color": "rgba(7, 201, 255, 0.458)"});
})

$(function(){
    $("#btnBuscar").on('click',function(){
        //console.log("KEYUP");
        let valor = $("#txtBuscar").val().toLowerCase();
        $("table tbody tr").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(valor) > -1)
        })
    })
})