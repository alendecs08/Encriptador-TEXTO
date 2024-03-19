function encriptar() {
    let textoOriginal = document.getElementById("inputText").value;
    let desplazamiento = parseInt(document.getElementById("shiftAmount").value);
    let textoEncriptado = '';

    for (let i = 0; i < textoOriginal.length; i++) {
        let charCode = textoOriginal.charCodeAt(i);

        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            let inicio = charCode >= 65 && charCode <= 90 ? 65 : 97;
            textoEncriptado += String.fromCharCode((charCode - inicio + desplazamiento) % 26 + inicio);
        } else {
            textoEncriptado += textoOriginal[i];
        }
    }

    document.getElementById("outputText").value = textoEncriptado;
}

function desencriptar() {
    let textoEncriptado = document.getElementById("outputText").value;
    let desplazamiento = parseInt(document.getElementById("shiftAmount").value);
    let textoOriginal = '';

    for (let i = 0; i < textoEncriptado.length; i++) {
        let charCode = textoEncriptado.charCodeAt(i);

        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            let inicio = charCode >= 65 && charCode <= 90 ? 65 : 97;
            textoOriginal += String.fromCharCode((charCode - inicio - desplazamiento + 26) % 26 + inicio);
        } else {
            textoOriginal += textoEncriptado[i];
        }
    }

    document.getElementById("inputText").value = textoOriginal;
}
