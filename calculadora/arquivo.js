function mostra(numero)
{
    document.getElementById("resultado").
    innerText += numero;
}

function calcula(){
    var expressao = document.getElementById("resultado").innerText;
    mostra('=');
    document.getElementById("resultado").innerText
    +=eval(expressao);
}