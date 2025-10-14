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

function validarFormulario() {
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const email = document.getElementById("email").value.trim();
    const biografia = document.getElementById("biografia").value.trim();

    if (!nombre || !apellido || !telefono || !email || !biografia) {
        alert("Todos los campos son obligatorios");
        return false;
    }

    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
        alert("El nombre solo debe contener letras y espacios");
        return false;
    }

    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(apellido)) {
        alert("El apellido solo debe contener letras y espacios");
        return false;
    }

    if (!/^\d+$/.test(telefono)) {
        alert("El teléfono solo debe contener números");
        return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Ingresa un email válido");
        return false;
    }

    if (biografia.length < 10) {
        alert("La biografía debe tener al menos 10 caracteres");
        return false;
    }

    alert("Formulario enviado correctamente!");
    return true;
}
