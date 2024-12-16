// Seleccionamos el botón y el body
const body = document.body;
const botonTema = document.getElementById("boton-tema");

// Función para alternar el ícono según el tema actual
const actualizarIcono = () => {
    botonTema.textContent = body.classList.contains("tema-claro") ? "☀️" : "🌙";
};

// Cargar el tema guardado en localStorage o establecer uno por defecto
const temaGuardado = localStorage.getItem("tema") || "tema-claro";
body.classList.add(temaGuardado);
actualizarIcono(); // Actualiza el ícono en función del tema cargado

// Evento para alternar entre temas
botonTema.addEventListener("click", () => {
    body.classList.toggle("tema-claro");
    body.classList.toggle("tema-oscuro");

    // Guardar el nuevo tema en localStorage
    const nuevoTema = body.classList.contains("tema-claro") ? "tema-claro" : "tema-oscuro";
    localStorage.setItem("tema", nuevoTema);

    // Actualizar el ícono
    actualizarIcono();
});



