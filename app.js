// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Función para agregar un nombre a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo'); // Obtener el campo de texto
    const nombre = input.value.trim(); // Obtener el valor del campo y eliminar espacios en blanco

    // Validar si el campo está vacío
    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.'); // Mostrar alerta si está vacío
        return; // Salir de la función
    }

    const listaAmigos = document.getElementById('listaAmigos'); // Obtener la lista de amigos
    const nuevoElemento = document.createElement('li'); // Crear un nuevo elemento de lista
    nuevoElemento.textContent = nombre; // Asignar el nombre al nuevo elemento
    listaAmigos.appendChild(nuevoElemento); // Agregar el nuevo elemento a la lista

    input.value = ''; // Limpiar el campo de texto después de agregar
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    const listaAmigos = document.getElementById('listaAmigos'); // Obtener la lista de amigos
    const amigos = listaAmigos.getElementsByTagName('li'); // Obtener todos los elementos de la lista

    // Validar si hay nombres en la lista
    if (amigos.length === 0) {
        alert('No hay nombres en la lista. Agrega al menos un nombre.'); // Mostrar alerta si no hay nombres
        return; // Salir de la función
    }

    const resultado = document.getElementById('resultado'); // Obtener el contenedor del resultado
    resultado.innerHTML = ''; // Limpiar el resultado anterior

    // Seleccionar un nombre aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length); // Generar un índice aleatorio
    const amigoSeleccionado = amigos[indiceAleatorio].textContent; // Obtener el nombre seleccionado

    // Mostrar el resultado
    const elementoResultado = document.createElement('li'); // Crear un nuevo elemento de lista
    elementoResultado.textContent = `¡El amigo seleccionado es: ${amigoSeleccionado}!`; // Asignar el resultado
    resultado.appendChild(elementoResultado); // Agregar el resultado a la lista
}