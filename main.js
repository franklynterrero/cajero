let saldo = 20000;

let transa = [];


function Consultar() {
    alert(`Su saldo es: $$ ${saldo}`)
};

function actualizarSaldo() {
    document.getElementById("saldo").innerHTML = `Saldo actual es: ${saldo}`
}

function mostraTransa() {
    const transalit = document.getElementById("Transaciones");
    transalit.innerHTML = '';
    transa.forEach( transaccion => {
        const li = document.createElement('li');
        li.innerText = transaccion;
        transalit.appendChild(li);   
    }
    )

};

function Depositar() {
    const cantidad = parseFloat(document.getElementById('cantidad').value);
    if (isNaN(cantidad) || cantidad <= 0 ) {
        alert("La cantidad a depositar debe ser mayor a 0")
        return;
    }
    saldo += cantidad
    transa.push(`Se depositarion ${cantidad}`)
    console.log(cantidad)
    actualizarSaldo();
    mostraTransa();
}

function Retirar() {
    const cantidad = parseFloat(document.getElementById('cantidad').value);
    if (isNaN(cantidad) || cantidad <= 0 ) {
        alert("La cantidad a depositar debe ser mayor a 0")
        return;
    }
    if (cantidad > saldo) {
        alert(" LOS fondos para esta transa son insuficientes");
        return;
    }
    saldo -= cantidad
    transa.push(`Se retiraron $$ ${cantidad}`);
    actualizarSaldo();
    mostraTransa();
}