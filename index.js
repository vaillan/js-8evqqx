// Import stylesheets
import './style.css';

//Variables globales
let dias = 0;
let anio = 0;
let mes = 0;

//Procesos generales
document.getElementById('c').addEventListener('click', onInit);

/**
 * Función para inicializar proceso principal
 * @return {void}
 */
function onInit(e) {
  anio = document.getElementById('anio').value;
  mes = document.getElementById('mes').value;
  const date = new Date(anio, mes, 0);
  dias = date.getDate();
  setAlert();
}

/**
 * Función para mostrar etiqueta con el año, mes y días correspondientes
 * @return {void}
 */
function setAlert() {
  let alert = document.getElementById('alert');
  alert.removeAttribute('hidden');
  alert.innerHTML = `
  <p>EL año 
    <span class="badge text-bg-success">${anio}</span> del mes 
    <span class="badge text-bg-success">${mes}</span> tiene
    <span class="badge text-bg-success">${dias}</span> días
  </p>
  `;
}
