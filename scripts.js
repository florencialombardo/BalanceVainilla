document.addEventListener('DOMContentLoaded', function () {
    const itemTareas = document.querySelectorAll('.task-item');
    const cargarPuntosBtn = document.getElementById('cargar-puntos');
    const totalPuntos = document.getElementById('total-puntos');
    let puntosTotales = parseInt(totalPuntos.textContent);

    itemTareas.forEach(item => {
        item.addEventListener('click', function () {
            this.classList.toggle('selected');
        });
    });

    cargarPuntosBtn.addEventListener('click', function () {
        let totalTareas = 0;
        itemTareas.forEach(item => {
            if (item.classList.contains('selected')) {
                totalTareas += parseInt(item.getAttribute('data-puntos'));
                item.classList.remove('selected');
            }
        });
        puntosTotales += totalTareas;
        totalPuntos.textContent = puntosTotales;
    });

    const itemPremio = document.querySelectorAll('.premio-item');
    const cargarPuntosPremio = document.getElementById('seleccionar-premio');
    const totalPremio = document.getElementById('total-carrito');
    let puntosPremio = parseInt(totalPremio.textContent);

    itemPremio.forEach(item => {
        item.addEventListener('click', function () {
            this.classList.toggle('selected');
        });
    });

    cargarPuntosPremio.addEventListener('click', function () {
        let totalPuntosPremio = 0;
        itemPremio.forEach(item => {
            if (item.classList.contains('selected')) {
                totalPuntosPremio += parseInt(item.getAttribute('data-puntos'));
                item.classList.remove('selected');
            }
        });
        puntosPremio += totalPuntosPremio;
        totalPremio.textContent = puntosPremio;
    });

    // Redirigir al carrito
    document.getElementById('ver-premio').addEventListener('click', function () {
        window.location.href = 'carrito.html';
    });

    // Volver a la página principal desde el carrito
    document.getElementById('volver').addEventListener('click', function () {
        window.location.href = 'index.html';
    });

    
});
 
