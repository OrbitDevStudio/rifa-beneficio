const totalNumeros = 1000; // Puedes cambiar la cantidad
const contenedor = document.getElementById('contenedor-rifa');

// Generar números
for (let i = 1; i <= totalNumeros; i++) {
    let div = document.createElement('div');
    div.classList.add('numero');
    div.innerText = i;
    
    div.onclick = () => {
        if(!div.classList.contains('vendido')) {
            confirmarCompra(i, div);
        }
    };
    contenedor.appendChild(div);
}

function confirmarCompra(num, elemento) {
    if(confirm(`¿Deseas apartar el número ${num}?`)) {
        elemento.classList.add('vendido');
        // Aquí conectarías con tu base de datos o WhatsApp
        window.open(`https://wa.me/+584122415696text=Hola, quiero el número ${num} de la rifa`);
    }
}