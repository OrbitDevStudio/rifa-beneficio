// --- GESTIÓN DE VENTAS ---
// Añade aquí los números que ya te pagaron. Ejemplo: [1, 50, 999]
const vendidosOficiales = []; 

// --- CONFIGURACIÓN ---
const totalNumeros = 1000;
const miTelefono = "584122415696";
let numeroActual = null;

const contenedor = document.getElementById('contenedor-rifa');
const capaPago = document.getElementById('capa-pago');
const displayNum = document.getElementById('num-pago');

// Generar la cuadrícula de 1000 números
for (let i = 1; i <= totalNumeros; i++) {
    let div = document.createElement('div');
    div.classList.add('numero');
    div.id = `n-${i}`;
    div.innerText = i;

    // VERIFICACIÓN: Si está en la lista de vendidos, se bloquea
    if (vendidosOficiales.includes(i)) {
        div.classList.add('vendido');
        // No le asignamos la función click para que no abra el pago
    } else {
        div.onclick = () => abrirPago(i);
    }
    
    contenedor.appendChild(div);
}

// Funciones de la Ventana de Pago
function abrirPago(num) {
    numeroActual = num;
    displayNum.innerText = num;
    capaPago.classList.remove('oculto');
}

function cerrarPago() {
    capaPago.classList.add('oculto');
}

function irAWhatsapp() {
    const texto = encodeURIComponent(
        `¡Hola! Seleccioné el número ${numeroActual}.\n` +
        `Aquí adjunto el capture del pago móvil para confirmar mi participación.`
    );
    window.open(`https://wa.me/${miTelefono}?text=${texto}`, '_blank');
    cerrarPago();
}

// Buscador (Optimizado)
document.getElementById('buscador').oninput = (e) => {
    const n = e.target.value;
    const el = document.getElementById(`n-${n}`);
    if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.style.border = "3px solid #25d366";
        setTimeout(() => el.style.border = "1px solid #ddd", 2000);
    }
};
