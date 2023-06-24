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
