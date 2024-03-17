const campo_texto = document.getElementById("textoEncriptado");
const campo_mensaje = document.getElementById("campoMensaje");

// Matriz que contiene las reglas de encriptación
const matriz_code =[
    ["e", "enter"], // Indice 0, letra E]
    ["i", "imes"], // Indice 1, letra I]
    ["o", "ober"], // Indice 2, letra O]
    ["a", "ai"], // Indice 3, letra A]
    ["u", "ufat"], //  Indice 4, letra U]
];

// Matriz que contiene las reglas de desencriptación
const matriz_code2 =[
    ["u", "ufat"], //  Indice 0, letra U]
    ["a", "ai"], // Indice 1, letra A]
    ["o", "ober"], // Indice 2, letra O]
    ["e", "enter"], // Indice 4, letra E]
    ["i", "imes"], // Indice 3, letra I]
];

function btnEncriptar() {
    const textoAEncriptar = encriptar(campo_texto.value);
    //const textoAEncriptar = encriptar(campo_texto.value.toLowerCase()); Para aceptar las mayusculas*
    campoMensaje.value = textoAEncriptar;

    const ocultarTexto = document.querySelector(".contenedor-resultado");

    if (textoAEncriptar.length >= "1") {
        const ocultarCampo = document.getElementById("MsjNoEncontrado");
        ocultarCampo.style.display = 'none';
        ocultarTexto.style.display = 'block';
    } else {      
        ocultarTexto.style.display = 'none';
    }
}


function encriptar(textoEncriptado){
      // Validar si el texto contiene mayúsculas o caracteres especiales
        if (/[!@#$%^&*(),.?":{}|<>A-Z]/.test(textoEncriptado)) {
        swal({
            title: "Un momento vaquero",
            text: "Ingresa solo letras minúsculas y sin caracteres especiales.",
            icon: "error"
        });
        return ""; // Detener la función si la validación no pasa
    }

    for (let i = 0; i < matriz_code.length; i ++){
        if(textoEncriptado.includes(matriz_code[i][0])){
            textoEncriptado = textoEncriptado.replaceAll(
                matriz_code[i][0], 
                matriz_code[i][1]   
                )
    }
}
return textoEncriptado;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(campo_texto.value);
    campoMensaje.value = textoDesencriptado

    const ocultarTexto = document.querySelector(".contenedor-resultado");

    if (textoDesencriptado.length >= "1") {
        const ocultarCampo = document.getElementById("MsjNoEncontrado");
        ocultarCampo.style.display = 'none';
        ocultarTexto.style.display = 'block';
    } else {      
        ocultarTexto.style.display = 'none';
    }
}

function desencriptar(textoEncriptado){
    // Validar si el texto contiene mayúsculas o caracteres especiales
    if (/[!@#$%^&*(),.?":{}|<>A-Z]/.test(textoEncriptado)) {
        swal({
            title: "Un momento vaquero",
            text: "Ingresa solo letras minúsculas y sin caracteres especiales.",
            icon: "error"
        });
        return ""; // Detener la función si la validación no pasa
    }
    for (let i = 0; i < matriz_code.length; i ++){
        if(textoEncriptado.includes(matriz_code2[i][1])){
            textoEncriptado = textoEncriptado.replaceAll(
                matriz_code2[i][1], 
                matriz_code2[i][0]
                )
    }
}
return  textoEncriptado;
}

// Clipboard
function btnCopiar() {
    // Selecciona el campo de mensaje
    const campoMensaje = document.getElementById("campoMensaje");
    campoMensaje.select();
    campoMensaje.setSelectionRange(0, 99999); // Para dispositivos móviles

    try {
        // Copia el contenido al portapapeles
        document.execCommand("copy");
        cambiarTextoBoton("Listo");
        //mostrarMensaje("¡Texto copiado al portapapeles!");
    } catch (err) {
        //mostrarMensaje("Error al intentar copiar el texto. Por favor, cópielo manualmente.");
    }
}
function cambiarTextoBoton(nuevoTexto) {
    // Cambia el texto del botón
    const botonCopiar = document.getElementById("botonCopiar");
    botonCopiar.innerText = nuevoTexto;
    
    // Resetea el mensaje después de unos segundos
    setTimeout(() => {
        botonCopiar.innerText = "Copiar";
    }, 1000); // 1000 milisegundos = 1 segundo
}

