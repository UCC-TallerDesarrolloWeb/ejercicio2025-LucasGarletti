/**
 * Descripción
 * @method convertirunidades de la función
 * @param {string} id "Metro"
 * @param {string} value ""
 * @return {int} value*unidad
 */


const convertirunidades = (id, value)=>{
    if(id==="metro"){
        document.getElementById("pulgada").value=value*39,37;
        document.getElementById("pie").value=value*3,281;
        document.getElementById("yarda").value=value*1,1;

    }
}
/**
 * Descripción
 * @method convertirunidades de la función
 * @param {string} id "Metro"
 * @param {string} value ""
 * @return {int} value*unidad
 */


const grarad =(id, value)=>{
    document.getElementById(id).value=(value*Math.PI)/180;
}

convertirUnidades = (id,valor) => {
    let met, pul, pie, yar;

    if(valor.includes(",")){
        valor = valor.replace(",", ".")
    }
    if(isNaN(valor)){
        alert("El valor ingresado es incorrecto");
        met = "";
        pul = "";
        pie = "";
        yar = "";
    }else if(id==="metro"){
        met = valor;
        pul = valor*39.3701;
        pie = valor*3.28084;
        yar = valor*1.09361;
    }else if(id==="pulgada"){
        //tarea
    }
    else if(id==="pie"){
        //tarea
    }else if(id==="yarda"){
        //tarea
    }
    document.lasUnidades.unid_metro.value = met;
    document.lasUnidades.unid_pulgada.value = pul;
    document.lasUnidades.unid_pie.value = pie;
    document.lasUnidades.unid_yarda.value = yar;
}


function mostrarOcultar(valor) {
  const div = document.getElementById('unDiv');
  if (!div) return;

  // admite valores "mostrar/ocultar" o "val_mostrar/val_ocultar"
  const esMostrar = valor === 'mostrar' || valor === 'val_mostrar';
  const esOcultar = valor === 'ocultar' || valor === 'val_ocultar';

  if (esMostrar) div.style.display = 'block';
  if (esOcultar) div.style.display = 'none';
}