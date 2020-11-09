function pasoUno(){
    const atras = document.getElementById('volver');
    const siguiente = document.getElementById('siguiente');
    const pasoUno = document.getElementById("pasoUno");
    const url = document.getElementById("url");
    const alerta = document.getElementById("error");
    const datos = document.getElementById("form");
    const terminar = document.getElementById("terminar");

    datos.style.display = "none";
    
    pasoUno.firstElementChild.textContent = "Asistente";
    pasoUno.lastElementChild.textContent = "Rellena el campo de la url de retorno, al darle al boton siguien tendrá que rellenar un formulario";

    siguiente.addEventListener('click',(e) =>{
        let alertas = [];
        if(url.value === '' || url.value == null){
            alertas.push('Tienes que escribir una url');
            alerta.textContent = alertas;
        }else{
            pasoDos();
        }
    })

    
}


function pasoDos(){
    const atras = document.getElementById('volver');
    const siguiente = document.getElementById('siguiente');
    const pasoUno = document.getElementById("pasoUno");
    const url = document.getElementById("url");
    const alerta = document.getElementById("error");
    const datos = document.getElementById("form");
    const validar = document.getElementById("datos");

    pasoUno.style.display = "none";
    alerta.style.display = "none";
    url.style.display = "none";
    validar.style.display = "none";
    atras.style.display = "block";
    siguiente.style.display = "block";
    datos.style.display = "block";

    const campo = document.getElementsByTagName("label");

    siguiente.addEventListener("click",(a) =>{
        let alertas = [];
        if(campo[1].firstElementChild.value === "" || campo[1].firstElementChild.value == null){
            alertas.push("Revisa el campo nombre")
        } 
        if(campo[2].firstElementChild.value === "" || campo[1].firstElementChild.value == null){
            alertas.push("Revisa el campo fecha")
        } 
        if(campo[4].firstElementChild.value === "" || campo[1].firstElementChild.value == null){
            alertas.push("Revisa el campo código postal")
        }
        if(campo[5].firstElementChild.value === "" || campo[1].firstElementChild.value == null){
            alertas.push("Revisa el campo provincia")
        } 
        if(campo[6].firstElementChild.value === "" || campo[1].firstElementChild.value == null){
            alertas.push("Revisa el campo municipio")
        } 

        if(alertas.lenght != 0){

            alerta.style.display = "block";
            alerta.textContent = alertas;
        } else {
            pasoUno();
        }
    })

    atras.addEventListener('click',() =>{
        pasoUno();

    })

}

pasoUno();