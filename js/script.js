const ingresoTexto = document.getElementById("ingresoTexto");

const botonEncriptar = document.getElementById("botonEncriptar");

const botonDesencriptar = document.getElementById("botonDesencriptar");

const botonCopiar = document.getElementById("botonCopiar");

const mensajeFinal = document.getElementById("mensajeFinal");

const munheco = document.getElementById("munheco")

const rightInfo = document.getElementById("rightInfo")

const right = document.getElementById("right")

const leftInfo = document.getElementById("leftInfo")
// e - enter
// o - ober
// i - imes
// a - ai
// u - ufat

let remplazar = [
    ["e" , "enter"],
    ["o" , "ober"],
    ["i" , "imes"],
    ["a" , "ai"],
    ["u" , "ufat"] ,
]
 
const remplace = (nuevoValor) => {
    mensajeFinal.innerHTML =  nuevoValor;

    munheco.classList.add("oculto");
    // ingresoTexto.value = "";
    rightInfo.style.display = "none";
    botonCopiar.style.display = "block";
    right.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");

}

botonEncriptar.addEventListener("click", () => {
    
const texto = ingresoTexto.value; 
    // console.log(texto);
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\A-Z¡@#%^&*()_|}\{[\]>\<:"`´´ñ+;,\u0300-\u036f']/g, " " )
    console.log(txt)

    if (texto == ""){
        // leftInfo.style.background = "#0A3871";
        // leftInfo.style.color = "#FFFF";
        // leftInfo.style.fontWeight = "800"
        // leftInfo.textContent = "El campo no debe estar vacío";
        // alert("El campo no debe estar vacío")
        swal({
            title: "Oops!",
            text: "No hay texto para encriptar",
            icon: "warning",
            button: "Ok",
          });

        setTimeout(()=>{

            leftInfo.removeAttribute("style");

        },1500);
    }
    else if( texto !== txt){
        // leftInfo.style.background = "#0A3871";
        // leftInfo.style.color = "#FFFF";
        // leftInfo.style.fontWeight = "800"
        // leftInfo.textContent = "No se aceptan acentos y caracteres especiales";
        // alert("El texto no debe tener acentos y caracteres especiales");
        swal({
            title: "ERROR",
            text: "El texto no debe contener mayúsculas, acentos ni caracteres especiales.",
            icon: "error",
            button: "Ok",
          });

        
    
        setTimeout(()=>{

            leftInfo.removeAttribute("style");
           

        },1500);
        mensajeFinal= ""

    }
    

    
    function encriptar (newText) {
        for(let i = 0; i < remplazar.length; i++){
            if(newText.includes(remplazar[i][0])){
                newText = newText.replaceAll(remplazar[i][0], remplazar[i][1])
            };
        };
        return newText
    }
    // const textoEncriptado = encriptar(texto)

    remplace (encriptar(texto))

    // mensajeFinal.innerHTML =  encriptar(texto)


 
    // console.log(encriptar(texto))

})
botonDesencriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value; 
    // console.log(texto);
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\A-Z¡@#%^&*()_|}\{[\]>\<:"`´´ñ+;,\u0300-\u036f']/g, " " )
    console.log(txt)

    if (texto == ""){
        // leftInfo.style.background = "#0A3871";
        // leftInfo.style.color = "#FFFF";
        // leftInfo.style.fontWeight = "800"
        // leftInfo.textContent = "El campo no debe estar vacío";
        // alert("El campo no debe estar vacío")
        swal({
            title: "Oops!",
            text: "No hay texto para desencriptar",
            icon: "warning",
            button: "Ok",
          });
        

        setTimeout(()=>{

            leftInfo.removeAttribute("style");

        },1500);
    }
    else if( texto !== txt){
        // leftInfo.style.background = "#0A3871";
        // leftInfo.style.color = "#FFFF";
        // leftInfo.style.fontWeight = "800"
        // leftInfo.textContent = "No se aceptan acentos y caracteres especiales";
        // alert("El texto no debe tener acentos y caracteres especiales");
        swal({
            title: "ERROR",
            text: "El texto no debe contener mayúsculas, acentos ni caracteres especiales.",
            icon: "error",
            button: "Ok",
          });

        
    
        setTimeout(()=>{

            leftInfo.removeAttribute("style");
           

        },1500);
        mensajeFinal= ""

    }
    
    function desencriptar(newText) {
        for(let i = 0; i < remplazar.length; i++){
            if(newText.includes(remplazar[i][1])) {
                newText = newText.replaceAll(remplazar[i][1], remplazar[i][0]);
            };
        };
        return newText
    }
    // const textoDesencriptado = desencriptar (texto);

    // mensajeFinal.innerHTML = textoDesencriptado
    remplace(desencriptar (texto));

})

botonCopiar.addEventListener("click", () =>{
    let texto = mensajeFinal
    // navigator.clipboard.writeText(texto.value);
    texto.select();
    document.execCommand('copy')
    alert("Texto Copiado");

    mensajeFinal.innerHTML = "";

    munheco.classList.remove("oculto");

    rightInfo.style.display = "block";
    botonCopiar.style.display = "none";
    right.classList.remove("ajustar");
    mensajeFinal.classList.remove("ajustar");
    ingresoTexto.focus();



})

