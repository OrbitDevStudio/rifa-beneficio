// --- LISTA DE NÚMEROS VENDIDOS ---
const vendidosOficiales = [5, 12, 120, 450, 800]; 
const metaTotal = 1000;

window.onload = function() {
    // Calcular estadísticas
    const cantidad = vendidosOficiales.length;
    const faltan = metaTotal - cantidad;
    const porcentaje = (cantidad / metaTotal) * 100;
    
    // Actualizar barra de progreso
    const barra = document.getElementById('barra-progreso');
    if (barra) {
        setTimeout(() => {
            barra.style.width = porcentaje + "%";
            barra.innerText = Math.floor(porcentaje) + "%";
        }, 500);
    }
    
    // Actualizar números
    const vendidosNum = document.getElementById('vendidos-num');
    const faltanNum = document.getElementById('faltan-num');
    
    if (vendidosNum) vendidosNum.textContent = cantidad;
    if (faltanNum) faltanNum.textContent = faltan;
};

// Funciones para modales
function cerrarBienvenida() {
    const modal = document.getElementById('bienvenida-modal');
    if (modal) modal.style.display = 'none';
}

function abrirDonar() {
    const modal = document.getElementById('modal-donar');
    if (modal) modal.style.display = 'flex';
}

function cerrarDonar() {
    const modal = document.getElementById('modal-donar');
    if (modal) modal.style.display = 'none';
}