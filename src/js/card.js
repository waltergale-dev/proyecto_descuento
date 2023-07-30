   // Escuchador de eventos para el botón "Agregar al carrito"
   document.getElementById('btn-agregar-carrito').addEventListener('click', function() {
    // Aquí puedes agregar la lógica para agregar el producto al carrito
    // Por ejemplo, puedes mostrar un mensaje de confirmación o realizar una solicitud AJAX al servidor.
    alert('Producto agregado al carrito');
});
// function eliminarProducto(idProducto) {
//     // Aquí puedes agregar la lógica para eliminar el producto del carrito.
//     // Por ejemplo, puedes eliminar la fila de la tabla que corresponde al producto.
//     // En este ejemplo, simplemente mostraremos una alerta de confirmación.
//     if (confirm('¿Estás seguro que deseas eliminar este producto del carrito?')) {
//         alert('Producto eliminado del carrito');
//         // Aquí puedes agregar la lógica para eliminar la fila de la tabla.
//     }
// }
 // Función para eliminar un producto del carrito
 function eliminarProducto(idProducto) {
    const indice = carrito.findIndex(producto => producto.id === idProducto);
    if (indice !== -1) {
        carrito.splice(indice, 1);
        // Actualizar la tabla y el total
        actualizarTabla();
    }
}

// Función para actualizar la tabla y el total
function actualizarTabla() {
    const tbody = document.querySelector('tbody');
    const totalElement = document.getElementById('total');
    let total = 0;

    // Limpiar la tabla antes de actualizarla
    tbody.innerHTML = '';

    // Generar filas para cada producto en el carrito
    carrito.forEach(producto => {
        const subtotal = producto.precio * producto.cantidad;
        total += subtotal;

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${producto.nombre}</td>
            <td>$${producto.precio.toFixed(2)}</td>
            <td>${producto.cantidad}</td>
            <td>$${subtotal.toFixed(2)}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="eliminarProducto(${producto.id})">Eliminar</button>
            </td>
        `;
        tbody.appendChild(tr);
    });

    // Actualizar el total
    totalElement.textContent = `$${total.toFixed(2)}`;
}

// Función para continuar con el pago (simulación)
function continuarPago() {
    alert('Continuando con el pago...');
}
