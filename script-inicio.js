// --- 🛒 LISTA DE NÚMEROS VENDIDOS (Actualiza aquí) ---
const vendidosOficiales = [5, 12, 120, 450, 800]; 
const metaTotal = 1000;

window.onload = function() {
    // 1. Mostrar el mensaje de bienvenida
    document.getElementById('bienvenida-modal').style.display = 'block';

    // 2. Calcular la barra de progreso
    const cantidad = vendidosOficiales.length;
    const porcentaje = (cantidad / metaTotal) * 100;
    
    const barra = document.querySelector('.barra-llena');
    if (barra) {
        barra.style.width = porcentaje + "%";
        barra.innerText = Math.floor(porcentaje) + "%";
    }
    
    const estadisticas = document.querySelector('.meta-progreso h3');
    if (estadisticas) {
        estadisticas.innerHTML = `Llevamos ${cantidad} de ${metaTotal} números vendidos`;
    }
};

// Funciones para cerrar ventanas
function cerrarBienvenida() {
    document.getElementById('bienvenida-modal').style.display = 'none';
}

function abrirDonar() {
    document.getElementById('modal-donar').style.display = 'block';
}

function cerrarDonar() {
    document.getElementById('modal-donar').style.display = 'none';
}
