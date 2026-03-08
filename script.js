const totalNumeros = 1000;
const contenedor = document.getElementById('contenedor-rifa');
const buscador = document.getElementById('buscador');

// 1. Crear los 1000 números de forma eficiente
for (let i = 1; i <= totalNumeros; i++) {
    let div = document.createElement('div');
    div.classList.add('numero');
    div.id = `num-${i}`;
    div.innerText = i;
    
    div.onclick = () => confirmarCompra(i, div);
    contenedor.appendChild(div);
}

// 2. Función del Buscador
buscador.oninput = () => {
    const val = buscador.value;
    if (val > 0 && val <= totalNumeros) {
        const el = document.getElementById(`num-${val}`);
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.style.backgroundColor = "#fff9c4"; // Resalte amarillo temporal
        setTimeout(() => el.style.backgroundColor = "white", 2000);
    }
};

function confirmarCompra(num, elemento) {
    const telefono = "584122415696";
    const mensaje = encodeURIComponent(`¡Hola! Quiero el número ${num} para apoyar la prótesis.`);
    
    if(confirm(`¿Apartar el número ${num}?`)) {
        window.open(`https://wa.me/${telefono}?text=${mensaje}`, '_blank');
    }
}

function cerrarModal() {
    document.getElementById('modal-ganador').classList.add('oculto');
}

