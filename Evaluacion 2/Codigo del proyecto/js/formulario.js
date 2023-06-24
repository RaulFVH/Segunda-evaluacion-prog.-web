document.getElementById("valNombre").style.display = "none";
document.getElementById("valApellido").style.display = "none";
document.getElementById("valRut").style.display = "none";
document.getElementById("valCelular").style.display = "none";
document.getElementById("valCorreo").style.display = "none";
document.getElementById("valPass").style.display = "none";

function validarFormulario(){
    let nombre = document.getElementById("txtNombre").value;
    let apellido = document.getElementById("txtApellido").value;
    let rut = document.getElementById("txtRut").value;
    let celular = document.getElementById("txtCelular").value;
    let correo = document.getElementById("txtCorreo").value;
    let contraseña = document.getElementById("txtPass").value;

    if (nombre.length == 0){
        document.getElementById("valNombre").style.display = "inline";
        document.getElementById("txtNombre").classList.add("is-invalid");
    }else{
        document.getElementById("txtNombre").classList.remove("is-invalid");
        document.getElementById("txtNombre").classList.add("is-valid");
        document.getElementById("valNombre").style.display = "none";
    }

    if (apellido.length == 0) {
        document.getElementById("valApellido").style.display = "inline";
        document.getElementById("txtApellido").classList.add("is-invalid");
    }else{
        document.getElementById("txtApellido").classList.remove("is-invalid");
        document.getElementById("txtApellido").classList.add("is-valid");
        document.getElementById("valApellido").style.display = "none";
    }

    if (rut.length == 0) {
        document.getElementById("valRut").style.display = "inline";
        document.getElementById("txtRut").classList.add("is-invalid");
    }else{
        document.getElementById("txtRut").classList.remove("is-invalid");
        document.getElementById("txtRut").classList.add("is-valid");
        document.getElementById("valRut").style.display = "none";
    }

    if (celular.length == 0) {
        document.getElementById("valCelular").style.display = "inline";
        document.getElementById("txtCelular").classList.add("is-invalid");
    }else{
        document.getElementById("txtCelular").classList.remove("is-invalid");
        document.getElementById("txtCelular").classList.add("is-valid");
        document.getElementById("valCelular").style.display = "none";
    }

    if (correo.length == 0) {
        document.getElementById("valCorreo").style.display = "inline";
        document.getElementById("txtCorreo").classList.add("is-invalid");
    }else{
        document.getElementById("txtCorreo").classList.remove("is-invalid");
        document.getElementById("txtCorreo").classList.add("is-valid");
        document.getElementById("valCorreo").style.display = "none";
    }

    if (contraseña.length == 0) {
        document.getElementById("valPass").style.display = "inline";
        document.getElementById("txtPass").classList.add("is-invalid");
    }else{
        document.getElementById("txtPass").classList.remove("is-invalid");
        document.getElementById("txtPass").classList.add("is-valid");
        document.getElementById("valPass").style.display = "none";
    }

}
 

