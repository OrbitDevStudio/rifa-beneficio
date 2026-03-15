// --- LISTA DE NÚMEROS VENDIDOS ---
const vendidosOficiales = [5, 12, 120, 450, 800]; 
const totalNumeros = 1000;
const miTelefono = "584122415696"; // ¡CAMBIA AQUÍ!

let numeroElegido = null;

// Elementos del DOM
const contenedor = document.getElementById('contenedor-rifa');
const capaPago = document.getElementById('capa-pago');
const displayNum = document.getElementById('num-pago');

// Crear números
function crearNumeros() {
    if (!contenedor) {
        console.error('No existe el contenedor');
        return;
    }
    
    contenedor.innerHTML = '';
    
    for (let i = 1; i <= totalNumeros; i++) {
        const div = document.createElement('div');
        div.classList.add('numero');
        div.id = `n-${i}`;
        div.innerText = i;
        div.setAttribute('data-numero', i);

        if (vendidosOficiales.includes(i)) {
            div.classList.add('vendido');
        } else {
            div.onclick = () => seleccionarNumero(i, div);
        }
        
        contenedor.appendChild(div);
    }
    console.log('Números creados:', totalNumeros);
}

// Seleccionar número
function seleccionarNumero(num, elemento) {
    document.querySelectorAll('.numero.seleccionado').forEach(el => {
        el.classList.remove('seleccionado');
    });
    
    elemento.classList.add('seleccionado');
    abrirPago(num);
}

function abrirPago(num) {
    numeroElegido = num;
    if (displayNum) displayNum.innerText = num;
    if (capaPago) capaPago.classList.remove('oculto');
}

function cerrarPago() {
    if (capaPago) capaPago.classList.add('oculto');
    document.querySelectorAll('.numero.seleccionado').forEach(el => {
        el.classList.remove('seleccionado');
    });
}

function irAWhatsapp() {
    if (!numeroElegido) {
        alert('Selecciona un número primero');
        return;
    }
    
    const msg = encodeURIComponent(
        `*RIFA SOLIDARIA*\n\n` +
        `Quiero el número *${numeroElegido}*.\n` +
        `Ya pagué. Adjunto comprobante.`
    );
    
    window.open(`https://wa.me/${miTelefono}?text=${msg}`, '_blank');
    cerrarPago();
}

// Buscador
const buscador = document.getElementById('buscador');
if (buscador) {
    buscador.addEventListener('input', (e) => {
        const val = e.target.value;
        if (val && val >= 1 && val <= totalNumeros) {
            const el = document.getElementById(`n-${val}`);
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "center" });
                el.style.borderColor = '#25d366';
                setTimeout(() => el.style.borderColor = '', 1500);
            }
        }
    });
}

// Iniciar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', crearNumeros);