/* Datos del formulario de IMC*/ 

    var estatura = document.querySelector("#inputEstatura").value;
    var peso = document.querySelector("#inputPeso").value;
    var kilos = 0.45
    


function calcularIMC(elEvento){
    elEvento.preventDefault();

    var estatura = document.querySelector("#inputEstatura").value;
    var libras = document.querySelector("#inputPeso").value;
    var resultado = document.querySelector("#inputRespuesta");
    var peso = (libras*kilos)
    var respuesta = peso/(estatura*estatura)

    var bajoPeso = 0
    var pesoNormal = 18.5
    var sobrePeso = 25
    var obesidad = 30

    if(respuesta < pesoNormal){
    resultado.innerHTML = "Tu IMC es de " + respuesta.toFixed(1) + ", te encuentras en bajo peso.";
    }else{
        if(respuesta < sobrePeso){
            resultado.innerHTML ="Tu IMC es de " + respuesta.toFixed(1) + ", te encuentras en tu peso ideal.";
            }else{
                if(respuesta < obesidad){
                    resultado.innerHTML ="Tu IMC es de " + respuesta.toFixed(1) + ", te encuentras en sobrepeso.";
                    }else{
                        if(respuesta > obesidad){
                            resultado.innerHTML ="Tu IMC es de " + respuesta.toFixed(1) + ", te encuentras en estado de obsesidad.";

                    }
                }
             }
         }
    }

    var boton = document.querySelector("#inputFormulario");
    boton.addEventListener("submit", calcularIMC);
    
 

