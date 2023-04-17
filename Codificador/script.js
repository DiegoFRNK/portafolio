let mensajeU=document.getElementById("input");
let bEncriptar=document.getElementById("encriptar");
let bDesencriptar=document.getElementById("desencriptar");
let bCopiar=document.getElementById("copMensaje");
let mensajeF=document.getElementById("msjEncriptado");
let pM = document.getElementById("pM");
let hM = document.getElementById("hM");

//ocultamos boton al iniciar
bCopiar.style.display = 'none';
//Colocar cursor en el input
function cursor(){
    mensajeU.focus();
}
cursor();
//Validar 
function contenido(texto) {
    //diccionario de letras que se van a validar para mostyrar mensaje de error
    let caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
    //Mayusculas y numeros
    let mayusculas = /[^a-z]/g;  
    let numeros = /[0-9]/g;  
    let vacio="";  

    //Si detectamos texto en mayusculas, numeros o caracteres especiales mandamos un return
    if(texto.match(mayusculas)||texto.match(caracteres)||texto.match(numeros)){
        alert("No se permiten caracteres especiales ni mayusculas");
        return true; 
    }else if(texto==vacio){
        alert("Ingrese un mensaje para encriptar");
    return true;
    }else {
        return false;
    }
}

//encriptar    

//
bEncriptar.addEventListener("click", function(){
    //ocultmaos todo pero mostramos el boton
    pM.style.display = 'none';
    hM.style.display = 'none ';
    bCopiar.style.display = 'initial';

    let textoUsuario=mensajeU.value;
    if(contenido(textoUsuario)==false){
        let encriptadoMSJ = encriptar(textoUsuario);
        mensajeF.innerText = encriptadoMSJ;
    }else{
        textInput = "";  
    }
    cursor();
})



//Declaramos las constantes de los valores de las vocales
const claves = { "e":"enter","i":"imes","a":"ai","o":"ober","u":"ufat"};
//Funcion para encriptar
function encriptar (textoUsuario) {
    let encriptado = "";
    for (const objs in claves) {
        encriptado = textoUsuario.replaceAll(objs,claves[objs]);
        textoUsuario = encriptado;        
    }
    return (encriptado);

    

}

//Boton copiar
bCopiar.addEventListener("click",function(){        
    navigator.clipboard.writeText(mensajeF.innerHTML);
    //borramos lo que el usuario escribrio en el primer text area
    document.querySelector("#input").value="";
    cursor();
});

//Desencriptar
bDesencriptar.addEventListener("click", function(){
    pM.style.display = 'none';
    hM.style.display = 'none ';
    bCopiar.style.display = 'initial';
    let textoIngresado = mensajeU.value;
    let desencriptado = desencriptar(textoIngresado);
    mensajeF.innerText = desencriptado;
    cursor();
})

function desencriptar (textoIngresado) {
    let encriptadoM = "";
    for (const objs in claves) {
        encriptadoM = textoIngresado.replaceAll(claves[objs],objs);
        textoIngresado = encriptadoM;        
    }
    return (encriptadoM);
}


