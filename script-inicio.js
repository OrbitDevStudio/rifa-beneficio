const vendidosOficiales = [5, 12, 120, 450, 800]; 
const metaTotal = 1000;

window.onload = function() {
    const cantidad = vendidosOficiales.length;
    const faltan = metaTotal - cantidad;
    const porcentaje = (cantidad / metaTotal) * 100;
    
    const barra = document.getElementById('barra-progreso');
    if (barra) {
        setTimeout(() => {
            barra.style.width = porcentaje + "%";
            barra.innerText = Math.floor(porcentaje) + "%";
        }, 500);
    }
    
    const vendidosNum = document.getElementById('vendidos-num');
    const faltanNum = document.getElementById('faltan-num');
    
    if (vendidosNum) vendidosNum.textContent = cantidad;
    if (faltanNum) faltanNum.textContent = faltan;
};

function cerrarBienvenida() {
    document.getElementById('bienvenida-modal').style.display = 'none';
}

function abrirDonar() {
    document.getElementById('modal-donar').style.display = 'flex';
}

function cerrarDonar() {
    document.getElementById('modal-donar').style.display = 'none';
}