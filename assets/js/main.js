function onlyLetters(event) {
    const key = event.key;
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]$/;
    if (!regex.test(key)) {
        alert("Solo se permiten letras");
        event.preventDefault();
        return false;
    }
    return true;
}

function onlyNumbers(event) {
    const key = event.key;
    const regex = /^[0-9]$/;
    if (!regex.test(key)) {
        alert("Solo se permiten números");
        event.preventDefault();
        return false;
    }
    return true;
}

function emailKeys(event) {
    const key = event.key;
    const regex = /^[a-zA-Z0-9@._-]$/;
    if (!regex.test(key)) {
        alert("Carácter no permitido en email");
        event.preventDefault();
        return false;
    }
    return true;
}

function bioKeys(event) {
    const key = event.key;
    const regex = /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s.,;:!?()\-]$/;
    if (!regex.test(key)) {
        alert("Carácter no permitido en biografía");
        event.preventDefault();
        return false;
    }
    return true;
}

// --- Validación completa al enviar ---
function validarFormulario() {
    const campos = ["nombre", "apellido", "telefono", "email", "biografia"];
    let valido = true;

    campos.forEach(id => {
        const campo = document.getElementById(id);
        campo.classList.remove("error"); 

        if (campo.value.trim() === "") {
            campo.classList.add("error"); 
            valido = false;
        }
    });

    if (!valido) {
        alert("Todos los campos son obligatorios");
        return false;
    }

    alert("Formulario enviado correctamente!");
    return true;
}

// --- Quitar borde rojo cuando el usuario empieza a escribir ---
document.addEventListener("DOMContentLoaded", () => {
    const campos = document.querySelectorAll("input, textarea");
    campos.forEach(campo => {
        campo.addEventListener("input", () => {
            if (campo.value.trim() !== "") {
                campo.classList.remove("error");
            }
        });
    });
});
