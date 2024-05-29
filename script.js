var res = document.getElementById("resultado")
var aleatorio = Math.floor(Math.random() * 100) + 1;

function adivinhe(){
    var numero = Number(document.getElementById("numero").value);

    if (numero < aleatorio){
        res.innerHTML += `<p>O número secreto é <b>maior</b> que <b>${numero}</b></p>`;
    } else if (numero > aleatorio) {
        res.innerHTML += `<p>O número secreto é <b>menor</b> que <b>${numero}</b></p>`;
    } else {
        res.innerHTML += `<p>Você acertou o número <b><a class="secreto">secreto!</a></b> 
        Ele é <b><a id="red">${numero}!</a></b></p>`;
    }
}


