function verificar(){
    var usuario=document.getElementById("usuario").value;
    var senha=document.getElementById("senha").value;
    if((usuario == "open" ) && (senha == "admin" )){
        document.getElementById("formulario").action="platz.html";
        document.getElementById("formulario").submit();
    }
    else{
    alert("Usuário ou Senha inválidos.");
    }
}