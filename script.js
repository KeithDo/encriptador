

let textos = {
    "a":"ai",
    "e":"enter",
    "i":"imes",
    "o":"ober",
    "u":"ufat"
}


document.getElementById('btnEncriptar').onclick = () => {
    var letras = document.getElementById("encriptar").value;

    if (letras.length == 0) {
        document.getElementById('desencriptado').style.backgroundImage = `url(munieco.svg)`;
        window.console.log('Ningun mensaje fue encontrado');
        document.getElementById('desencriptado').innerHTML = '<div class="mensajeNo"><strong>Ningún mensaje fue encontrado</strong><br>Ingresa el texto que desees encriptar o desencriptar</div>';
    } else {
        document.getElementById('desencriptado').style.backgroundImage = `none`;

        var encriptado = '';
        for (var i = 0; i < letras.length; i++) {
            if (textos[letras[i]] != undefined) {
                encriptado += textos[letras[i]];
            } else {
                encriptado += letras[i];
            }
        }

        document.getElementById("desencriptado").innerHTML = encriptado;
    }
    document.getElementById('btnCopiar').style.display = 'block';
}


document.getElementById("btnDesencriptar").onclick = () => {
    var encriptado = document.getElementById('encriptar').value;
    var alerta = '';
    var comp = '';
    for (var i = 0; i < encriptado.length; i++) {
        if (encriptado[i] == "a") {
            comp = '';
            for (j = 0; j < textos["a"].length; j++) {
                comp += encriptado[i+j];
            }
            if (comp == textos["a"]) {
                alerta += "a";
                i += textos["a"].length - 1;
            } else {
                alerta+= "a";
            }
        } else if (encriptado[i] == "e") {
            comp = '';
            for (j = 0; j < textos["e"].length; j++) {
                comp += encriptado[i+j];
            }
            if (comp == textos["e"]) {
                alerta += "e";
                i += textos["e"].length - 1;
            } else {
                alerta+="e";
            }
        } else if (encriptado[i] == "i") {
            comp = '';
            for (j = 0; j < textos["i"].length; j++) {
                comp += encriptado[i+j];
            }
            
            if (comp == textos["i"]) {
                alerta += "i";
                i += textos["i"].length - 1;
            } else {
                alerta += 'i';
            }
        } else if (encriptado[i] == "o") {
            comp = '';
            for (j = 0; j < textos["o"].length; j++) {
                comp += encriptado[i+j];
            }
            if (comp == textos["o"]) {
                alerta += "o";
                i += textos["o"].length - 1;
            } else {
                alerta += 'o';
            }
        } else if (encriptado[i] == "u") {
            comp = '';
            for (j = 0; j < textos["u"].length; j++) {
                comp += encriptado[i+j];
            }
            if (comp == textos["u"]) {
                alerta += "u";
                i += textos["u"].length - 1;
            } else {
                alerta += "u";
            }
        } else {
        alerta += encriptado[i];
        }
    }
    document.getElementById('desencriptado').innerHTML = alerta;
    document.getElementById('btnCopiar').style.display = 'block';
}


document.getElementById('btnCopiar').onclick = () => {
    try {
        window.console.log(document.getElementById('desencriptado').innerText);
        navigator.clipboard.writeText(document.getElementById('desencriptado').innerText);
        window.alert('El texto fue copiado al portapapeles');
        document.getElementById('btnCopiar').style.display = 'none';
    } catch (e) {
        window.alert("Hubo problemas al realizar la copia hacia el portapapeles. Error: "+e);
    }    
    document.getElementById('encriptar').value = '';
    document.getElementById('encriptar').focus();
}

document.getElementById('encriptar').focus();