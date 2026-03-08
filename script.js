const totalNumeros = 1000;
const miTelefono = "584122415696";

// --- AQUÍ ANOTAS LOS NÚMEROS VENDIDOS ---
// Ejemplo: si vendiste el 5, el 500 y el 720, ponlos así: [5, 500, 720]
const vendidosOficiales = []; 

const contenedor = document.getElementById('contenedor-rifa');
const buscador = document.getElementById('buscador');

for (let i = 1; i <= totalNumeros; i++) {
    let div = document.createElement('div');
    div.classList.add('numero');
    div.id = `n-${i}`;
    div.innerText = i;

    // Si el número está en tu lista de vendidos, se bloquea
    if (vendidosOficiales.includes(i)) {
        div.classList.add('vendido');
    } else {
        div.onclick = () => confirmar(i, div);
    }
    
    contenedor.appendChild(div);
}

function confirmar(num, el) {
    const msg = encodeURIComponent(`¡Hola! Quiero el número ${num} de la rifa.`);
    if(confirm(`¿Apartar el número ${num}?`)) {
        window.open(`https://wa.me/${miTelefono}?text=${msg}`, '_blank');
        
        // Efecto visual inmediato para que el usuario vea que lo tocó
        el.style.backgroundColor = "#25d366";
        el.style.color = "white";
        el.innerText = "✓";
    }
}

// Buscador
buscador.oninput = () => {
    const n = buscador.value;
    const el = document.getElementById(`n-${n}`);
    if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.classList.add('resaltado');
        setTimeout(() => el.classList.remove('resaltado'), 2000);
    }
};
