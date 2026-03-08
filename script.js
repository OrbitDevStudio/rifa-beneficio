// Agrega aquí los números vendidos, ej: [10, 20, 500]
const vendidosOficiales = []; 
const totalNumeros = 1000;
const tlfWhatsapp = "584122415696";
let numSeleccionado = null;

const contenedor = document.getElementById('contenedor-rifa');
const capaPago = document.getElementById('capa-pago');
const textoNum = document.getElementById('num-pago');

// Generar números
for (let i = 1; i <= totalNumeros; i++) {
    let div = document.createElement('div');
    div.classList.add('numero');
    div.id = `n-${i}`;
    div.innerText = i;

    if (vendidosOficiales.includes(i)) {
        div.classList.add('vendido');
    } else {
        div.onclick = () => {
            numSeleccionado = i;
            textoNum.innerText = i;
            capaPago.classList.remove('oculto');
        };
    }
    contenedor.appendChild(div);
}

function cerrarPago() {
    capaPago.classList.add('oculto');
}

function irAWhatsapp() {
    const msj = encodeURIComponent(`¡Hola! Elegí el número ${numSeleccionado} para la rifa de la prótesis. Aquí envío el comprobante.`);
    window.open(`https://wa.me/${tlfWhatsapp}?text=${msj}`, '_blank');
    cerrarPago();
}

// Buscador
document.getElementById('buscador').oninput = (e) => {
    const val = e.target.value;
    const el = document.getElementById(`n-${val}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
};
